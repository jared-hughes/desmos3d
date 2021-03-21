import * as THREE from 'three'
import MVCPart from 'MVCPart'

export default class Model extends MVCPart {
  constructor (calc3) {
    super(calc3)
    this.camera = null
    this.definitions = {}
    this.values = {}
    this.dependents = {}
    this.scene = new THREE.Scene()
    this.exprs = new Set()
  }

  init () {
    this.initDefaultCamera()
    this.initExpressionsObserver()
  }

  initDefaultCamera () {
    // default camera position
    this.camera = new THREE.PerspectiveCamera(
      75, // FOV (degrees)
      1, // aspect ratio, temp until first `applyGraphpaperBounds`
      0.1, 1000 // clipping plane
    )
    this.camera.position.x = 3
    this.camera.lookAt(0, 0, 0)
  }

  initExpressionsObserver () {
    const targetNode = document.querySelector('.dcg-template-expressioneach')
    const config = { attributes: false, childList: true, subtree: false }
    const observer = new window.MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        for (const addedNode of mutation.addedNodes) {
          if (addedNode.nodeName === '#text') {
            continue
          }
          const id = addedNode.attributes['expr-id']?.value
          if (addedNode.classList.contains('dcg-mathitem') && this.exprs.has(id)) {
            this.view.updateThreeExpr(addedNode, id, this.errors[id])
          }
        }
      }
    })
    observer.observe(targetNode, config)
  }

  setDefinitions (nextDefinitions) {
    this.definitions = nextDefinitions
    this.view.setCanvasVisible(Object.keys(nextDefinitions).length > 0)
  }

  setThreeExprs (exprs, errors) {
    for (const id of this.exprs) {
      if (!exprs.has(id)) {
        this.view.removeThreeExpr(id)
      }
    }
    for (const id of exprs) {
      this.view.addThreeExpr(id, errors[id])
    }
    this.exprs = exprs
    this.errors = errors
  }

  deleteVariable (variable) {
    if (variable in this.values) {
      this.values[variable].dispose()
      delete this.values[variable]
    }
  }

  changeVariable (variable, valueFunc) {
    // pass in function instead of value itself to defer construction
    // until after deleting the variable
    this.deleteVariable(variable)
    if (valueFunc !== null) {
      const value = valueFunc()
      if (value.error) {
        console.warn(value.error)
      } else {
        this.values[variable] = value
      }
    }
    this.variableChanged(variable)
  }

  variableChanged (variable) {
    console.log('variable changed', variable);
    (this.dependents[variable] || [])
      .forEach(object => object.afterDepChanged(variable))
  }

  setBounds (bounds) {
    this.view.setBounds(bounds)
    this.camera.aspect = bounds.width / bounds.height
    this.camera.updateProjectionMatrix()
    this.rerender()
  }

  rerender () {
    this.view.rerender()
  }
}