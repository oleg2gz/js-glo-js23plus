const btn = document.getElementById('btn')
const btnCircle = document.getElementById('e_btn')
const inputRange = document.querySelector('input[type=range]')
const spanRange = document.getElementById('range-span')
const inputText = document.querySelector('input[type=text]')
const linkGoogle = document.querySelector('div.controls > a')
const square = document.getElementById('square')
const circle = document.getElementById('circle')

btn.addEventListener('click', () => {
  square.style.backgroundColor = inputText.value
})

inputRange.addEventListener('input', () => {
  const value = inputRange.value + '%'
  spanRange.textContent = value

  circle.style.width = value
  circle.style.height = value
})

btnCircle.addEventListener('click', (e) => {
  e.stopPropagation()

  btnCircle.style.display = 'none'
  circle.style.backgroundColor = 'steelblue'
})

circle.addEventListener('click', (e) => {
  e.stopPropagation()
})

// Клик по красному квадрату
square.addEventListener('click', (e) => {
  e.stopPropagation()

  btnCircle.style.display = 'block'
  circle.style.backgroundColor = 'yellow'
})

// Клик по ссылке на Гугл
linkGoogle.addEventListener('click', (e) => {
  e.preventDefault()
  e.stopPropagation()

  linkGoogle.insertAdjacentHTML(
    'beforebegin',
    '<h1>Куда это ты собрался?!</h1>'
  )
})

// Клик по документу, убрать h1
document.addEventListener('click', (e) => {
  const h1 = document.querySelector('h1')

  if (document.querySelector('h1')) h1.remove()
})
