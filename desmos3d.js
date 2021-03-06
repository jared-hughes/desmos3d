// ==UserScript==
// @name         Desmos Three.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Use three.js directly in Desmos
// @author       You
// @match        https://www.desmos.com/calculator/*
// @require      https://threejs.org/build/three.js
// @grant        none
// ==/UserScript==

// TODO: change the @require build of three.js to point to a specific version

// latest graph: https://www.desmos.com/calculator/rz8tcumv52

(function() {
'use strict';

let renderer, Calc, THREE, scene, camera
let definitions = {};
let values = {};
let dependents = {}

function applyGraphpaperBounds() {
  const bounds = Calc.graphpaperBounds.pixelCoordinates;
  renderer.setSize(bounds.width, bounds.height);
  renderer.domElement.width = bounds.width;
  renderer.domElement.height = bounds.height;
  // top is always 0
  renderer.domElement.style.left = bounds.left + "px";
  camera.aspect = bounds.width / bounds.height;
  camera.updateProjectionMatrix();
  rerender()
}

function observeGraphpaperBounds() {
  // the observer doesn't get called the first time
  applyGraphpaperBounds()
  Calc.observe('graphpaperBounds', applyGraphpaperBounds);
}

function isDefinitionEqual(a, b) {
  return a && b && a.func == b.func
    && a.args.length == b.args.length
    && a.args.every((e, i) => b.args[i] == e)
}

function parseLine(line) {
  // let parts = line.match(/^(?:\s*(?<var>\w+)\s*=)?\s*(?<func>\w+)\((?<args>(?:[^;]+(?:;[^;]+)*)?)\)$/)
  let parts = line.split("=")
  let variable = null
  if (parts.length > 2) {
    throw "ParseError: more than one `=`"
  }
  if (parts.length == 2) {
    variable = parts.shift().trim()
  }
  const match = parts[0].match(/\s*(?<func>\w+)\((?<args>[^)]*)\)/)
  if (match == null) {
    // Silent parse error
    return null
  }
  const {func, args: argsString} = match.groups
  let braceStack = []
  let args = []
  let lastArg = ""
  for (const c of argsString) {
    if ("([{".includes(c)) {
      braceStack.push(c)
    } else if (")]}".includes(c)) {
      if ("([{"[")]}".indexOf(c)] != braceStack.pop()) {
        throw "ParseError: mismatched braces"
      }
    }

    if (c == "," && braceStack.length == 0) {
      // all braces are closed, so this comma separates arguments
      args.push(lastArg.trim())
      lastArg = ""
    } else {
      lastArg += c;
    }
  }
  if (lastArg != "") {
    args.push(lastArg.trim())
  }
  return {
    variable,
    func,
    args,
  }
}

function deleteVariable(variable) {
  if (variable in values) {
    values[variable]?.dispose()
    delete values[variable]
    delete definitions[variable]
  }
}

function changeVariable(variable, value) {
  deleteVariable(variable)
  values[variable] = value
}

function variableChanged(variable) {
  // TODO: handle cyclic loops
  (dependents[variable] || [])
  .forEach(object => object.afterDepChanged(variable))
}

function generateObject(def) {
  const funcs = {
    'ColorRGB': Color,
    MeshBasicMaterial,
    MeshLambertMaterial,
    IcosahedronGeometry,
    Mesh,
    Position,
    Show,
    PointLight,
    AmbientLight,
  }
  if (def.func in funcs) {
    let object = new funcs[def.func](def.args)
    object.variable = def.variable
    return object
  } else {
    throw `Function ${def.func} not supported`
  }
}

const Type = Object.freeze({
  NUM: 'numericValue',
  LIST: 'listValue',
  COLOR: {},
  MATERIAL: {},
  GEOMETRY: {},
  OBJECT: {}, // subclass of THREE.Object3D; includes light and mesh
  CAMERA: {},
  NULL: {},
})

function helperExpression(expr, type, callback) {
  let helper = Calc.HelperExpression({latex: expr})
  helper.observe(type, () => {
    const val = isNaN(helper.numericValue) ? parseFloat(expr) : helper.numericValue
    callback(val)
  })
  return helper
}

class IntermediateObject {
  constructor(expectedArgs, args) {
    // expectedArgs: [{name:x, type:numericValue}]
    if (args.length !== expectedArgs.length) {
      // shouldn't get to this point
      throw "Argument length mismatch"
    }
    this.isDefined = false
    this.values = {}
    this.dependencies = {}
    this.helpers = {}
    args.forEach((expr, i) => {
      const type = expectedArgs[i].type
      this.values[expectedArgs[i].name] = null;
      if (type == Type.NUM || type == Type.LIST) {
        const helper = helperExpression(expr, type, value => {
          this.changeArg(expectedArgs[i].name, value)
        })
        this.helpers[expectedArgs[i].name] = {
          type,
          helper,
        }
      } else {
        // // can only define desmos3d objects in order
        // // global onValueChange('geometry') to get list
        // if (!(expr in values)) {
        //   throw `3D variable \`${expr}\` not defined`
        // }
        this.dependencies[expr] = expectedArgs[i].name
        dependents[expr] = dependents[expr] || new Set()
        dependents[expr].add(this)
      }
    })
  }

  afterDepChanged(variable) {
    const argName = this.dependencies[variable]
    this.changeArg(argName, values[variable])
  }

  changeArg(argName, value) {
    this.values[argName] = value
    this.argChanged(argName, value)
    if (Object.values(this.values).some(e => e === null || e.isDefined === false)) {
      if (this.isDefined) {
        this.isDefined = false
        variableChanged(this.variable)
      } else {
        // not enough args, and currently not defined, so no change
      }
    } else {
      this.isDefined = true
      // HERE can check for cyclic variable definition?
      variableChanged(this.variable)
    }
  }

  dispose() {
    // HERE
    // TODO
    // this.values.forEach((value, i) => {
    //   value.helper && value.helper.unObserve(value.type)
    // })
  }
}

class Color extends IntermediateObject {
  static type = Type.COLOR

  // forced to do this while there is no observe on advancedStyling colors
  constructor(args) {
    const expectedArgs = [
      {name: 'r', type: Type.NUM},
      {name: 'g', type: Type.NUM},
      {name: 'b', type: Type.NUM},
    ]
    super(expectedArgs, args)
    this.threeObject = new THREE.Color()
  }

  static clampMapRGBComponent(x) {
    if (x < 0) return 0
    else if (x > 255) return 1
    else return x / 255
  }

  argChanged(name, value) {
    switch (name) {
      case 'r':
      case 'g':
      case 'b':
        this.threeObject[name] = Color.clampMapRGBComponent(value)
        break
    }
  }
}

class MeshMaterial extends IntermediateObject {
  static type = Type.MATERIAL

  constructor(args, threeObject) {
    const expectedArgs = [
      {name: 'color', type: Type.COLOR},
    ]
    super(expectedArgs, args)
    this.threeObject = new threeObject()
  }

  argChanged(name, value) {
    switch (name) {
      case 'color':
        this.threeObject.color.set(value.threeObject)
        break
    }
  }
}

class MeshBasicMaterial extends MeshMaterial {
  // consistent color regardless of lighting
  constructor(args) {
    super(args, THREE.MeshBasicMaterial)
  }
}

class MeshLambertMaterial extends MeshMaterial {
  // needs lights
  constructor(args) {
    super(args, THREE.MeshLambertMaterial)
  }
}

class Light extends IntermediateObject {
  static type = Type.OBJECT

  constructor(args, threeObject) {
    const expectedArgs = [
      // NOTE: can add color, distance, decay
      // https://threejs.org/docs/index.html#api/en/lights/PointLight
      {name: 'color', type: Type.COLOR},
      {name: 'intensity', type: Type.NUM},
    ]
    super(expectedArgs, args)
    this.threeObject = new threeObject()
  }

  argChanged(name, value) {
    switch (name) {
      case 'color':
        this.threeObject.color = value.threeObject
        break
      case 'intensity':
        this.threeObject.intensity = value
        break
    }
  }
}

class PointLight extends Light {
  constructor(args) {
    super(args, THREE.PointLight)
  }
}

class AmbientLight extends Light {
  constructor(args) {
    super(args, THREE.AmbientLight)
  }
}

class Position extends IntermediateObject {
  static type = Type.OBJECT

  constructor(args) {
    const expectedArgs = [
      {name: 'object', type: Type.OBJECT},
      {name: 'x', type: Type.NUM},
      {name: 'y', type: Type.NUM},
      {name: 'z', type: Type.NUM},
    ]
    super(expectedArgs, args)
    this.threeObject = new THREE.Group()
  }

  argChanged(name, value) {
    switch (name) {
      case 'x':
      case 'y':
      case 'z':
        this.threeObject.position[name] = value
        break
      case 'object':
        // replace the current object
        this.threeObject.clear()
        this.threeObject.add(value.threeObject)
    }
  }
}

class IcosahedronGeometry extends IntermediateObject {
  static type = Type.GEOMETRY

  constructor(args) {
    const expectedArgs = [
      {name: 'radius', type: Type.NUM}, // should default to 1
      {name: 'detail', type: Type.NUM}, // should default to 0
    ]
    super(expectedArgs, args)
    this.threeObject = new THREE.IcosahedronGeometry()
  }

  argChanged(name, value) {
    // HERE
    // TODO: parameters: Any modification after instantiation does not change the geometry.
    switch (name) {
      case 'radius':
        this.threeObject.radius = value
        break
      case 'detail':
        this.threeObject.detail = value
        break
    }
  }
}

class Mesh extends IntermediateObject {
  static type = Type.OBJECT

  constructor(args) {
    const expectedArgs = [
      {name: 'geometry', type: Type.GEOMETRY},
      {name: 'material', type: Type.MATERIAL}
    ]
    super(expectedArgs, args)
    this.threeObject = new THREE.Mesh()
  }

  argChanged(name, value) {
    switch (name) {
      case 'geometry':
        // TODO; point by reference, so don't always need to change?
        // argChanged → changeArg
        // conditionally call `variableChanged` above
        this.threeObject.geometry = value.threeObject
        break
      case 'material':
        this.threeObject.material = value.threeObject
        break
    }
  }
}

class Show extends IntermediateObject {
  static type = Type.NULL

  constructor(args) {
    const expectedArgs = [
      {name: 'object', type: Type.OBJECT},
    ]
    super(expectedArgs, args)
    this.threeObject = null
  }

  argChanged(name, value) {
    switch (name) {
      case 'object':
        this.threeObject && scene.remove(this.threeObject)
        this.threeObject = value.threeObject
        scene.add(this.threeObject)
        break
    }
    rerender()
  }
}

function graphChanged() {
  let parsed = []
  Calc.getState().expressions.list.map(expr => {
    if (expr.type == "text") {
      const lines = (expr.text || "").split("\n")
      if (lines[0] == "@three") {
        lines.slice(1).map(line => {
          const parsedLine = parseLine(line)
          if (parsedLine !== null) {
            parsed.push(parsedLine)
          }
        })
      }
    }
  })
  let changedDefinitions = {}
  let nextVariables = new Set()
  parsed.forEach(newDef => {
    const variable = newDef.variable;
    const oldDef = definitions[variable]
    nextVariables.add(variable)
    if (!isDefinitionEqual(newDef, oldDef)) {
      changedDefinitions[variable] = newDef
    }
  })
  for (let variable in definitions) {
    if (!nextVariables.has(variable)) {
      deleteVariable(variable)
    }
  }
  for (let variable in changedDefinitions) {
    changeVariable(variable, generateObject(changedDefinitions[variable]))
    definitions[variable] = changedDefinitions[variable]
  }
  console.log('defs', definitions)
  console.log('values', values)
}

function observeGraph() {
  Calc.observeEvent('change', graphChanged);
  graphChanged();
}

function rerender() {
  console.log("rerender", performance.now(), scene, camera);
  renderer.render(scene, camera);
}

function init() {
  THREE = window.THREE
  Calc = window.Calc

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75, // FOV (degrees)
    1, // aspect ratio, temp until first `applyGraphpaperBounds`
    0.1, 1000 // clipping plane
  );
  camera.position.x = 3
  camera.lookAt(0,0,0)

  renderer = new THREE.WebGLRenderer();

  renderer.domElement.style.position = 'absolute';
  const container = document.querySelector(".dcg-container")
  container.prepend(renderer.domElement);
  container.querySelector(".dcg-grapher").style.opacity = 0.5

  observeGraphpaperBounds()
  observeGraph()
}

const waitInterval = setInterval(() => {
  if (window.Calc) {
    clearInterval(waitInterval)
    init()
  }
}, 50)
})();
