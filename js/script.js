const cube = document.querySelector('.cube')
const btnMove = document.querySelector('.move')
const btnReset = document.querySelector('.reset')
const cubeField = document.querySelector('.cube-field')
const cubeFieldWidthValue = parseFloat(getComputedStyle(cubeField).width)
let posX = 0
let animation

const animateCube = () => {
  if (posX >= cubeFieldWidthValue) {
    cancelAnimationFrame(animation)
    cube.classList.add('circle')
    btnMove.textContent = 'move'
    return
  }
  animation = requestAnimationFrame(animateCube)
  cube.style.left = posX++ + 'px'
}

const controlMove = () => {
  if (btnMove.textContent === 'pause') {
    cancelAnimationFrame(animation)
    btnMove.textContent = 'move'
    return
  }
  btnMove.textContent = 'pause'
  animateCube()
}

const controlReset = () => {
  cancelAnimationFrame(animation)
  cube.classList.remove('circle')
  btnMove.textContent = 'move'
  cube.style.left = ''
  posX = 0
}

btnMove.addEventListener('click', controlMove)
btnReset.addEventListener('click', controlReset)
