import { Type, FunctionApplication } from './functionSupers.js'
import * as THREE from 'three'
import { Color } from './misc'

// needs to be double sided for CircleGeometry, PlaneGeometry, and RingGeometry
const side = THREE.DoubleSide

class MeshMaterial extends FunctionApplication {

}
MeshMaterial.type = Type.MATERIAL

class MeshColorMaterial extends MeshMaterial {
  static expectedArgs () {
    return [
      { name: 'color', type: Type.COLOR, default: new Color(255, 255, 255) }
    ]
  }

  constructor (args, ThreeObject) {
    super(new ThreeObject({ color: args.color.threeObject, side }))
  }

  argChanged (name, value) {
    switch (name) {
      case 'color':
        this.threeObject.color.set(value.threeObject)
        break
    }
  }
}

export class MeshBasicMaterial extends MeshColorMaterial {
  // consistent color regardless of lighting
  constructor (args) {
    super(args, THREE.MeshBasicMaterial)
  }
}

export class MeshLambertMaterial extends MeshColorMaterial {
  // needs lights
  constructor (args) {
    super(args, THREE.MeshLambertMaterial)
  }
}

export class MeshPhongMaterial extends MeshColorMaterial {
  constructor (args) {
    super(args, THREE.MeshPhongMaterial)
  }
}

export class MeshToonMaterial extends MeshColorMaterial {
  constructor (args) {
    super(args, THREE.MeshToonMaterial)
  }
}

export class MeshNormalMaterialStatic extends MeshMaterial {
  constructor () {
    super(new THREE.MeshNormalMaterial({ side }))
  }
}

export class MeshNormalMaterial extends MeshMaterial {
  static expectedArgs () {
    return []
  }

  constructor (args) {
    super(new THREE.MeshNormalMaterial({ side }))
  }
}

export class MeshDepthMaterial extends MeshMaterial {
  static expectedArgs () {
    return []
  }

  // Because we dont' use a logarithmic depth buffer, camera has to be *very*
  // close to the object to get any lightness (close to near value of clipping plane)
  constructor (args) {
    super(new THREE.MeshDepthMaterial({ side }))
  }
}
