'use strict'

let squareMaker = null
let square = null
let styles = null

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector
  this.height = height + 'px'
  this.width = width + 'px'
  this.bg = bg
  this.fontSize = fontSize + 'px'
}

DomElement.prototype.createElement = function () {
  let elem = null

  if (this.selector[0] === '.') {
    elem = document.createElement('div')
    elem.classList.add(this.selector.slice(1))
  } else if (this.selector[0] === '#') {
    elem = document.createElement('p')
    elem.id = this.selector.slice(1)
  }
  elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`
  elem.textContent = 'MIROMAX!'
  document.body.append(elem)

  return elem
}

squareMaker = new DomElement('.square', 100, 100, 'red', 18)
square = squareMaker.createElement()
square.style.position = 'absolute'
styles = getComputedStyle(square)
square.style.top = styles.top
square.style.left = styles.left

document.addEventListener('keydown', (e) => {
  const top = parseFloat(square.style.top)
  const left = parseFloat(square.style.left)

  switch (e.key) {
    case 'ArrowLeft':
      square.style.left = left - 10 + 'px'
      break

    case 'ArrowRight':
      square.style.left = left + 10 + 'px'
      break

    case 'ArrowUp':
      square.style.top = top - 10 + 'px'
      break

    case 'ArrowDown':
      square.style.top = top + 10 + 'px'
  }
})
