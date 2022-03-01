const squareBody = document.querySelector('.square-body')
const btnReset = document.querySelector('.btn-reset')
let blocks = Array.from(document.querySelectorAll('.block'))
const ITEMS_STACK = 5

const reset = () => {
  blocks.sort((a, b) => a.innerText - b.innerText)
  squareBody.innerHTML = ''
  blocks.forEach((block) => squareBody.append(block))
}

const moveLeft = (item) => {
  const index = blocks.findIndex((block) => block === item) - 1
  if (index < 0) return
  blocks[index].before(item)
  blocks = Array.from(document.querySelectorAll('.block'))
}

const moveRight = (item) => {
  const index = blocks.findIndex((block) => block === item) + 1
  if (index >= blocks.length) return
  blocks[index].after(item)
  blocks = Array.from(document.querySelectorAll('.block'))
}

const moveUp = (item) => {
  const index = blocks.findIndex((block) => block === item) - ITEMS_STACK
  if (index < 0) return
  item.after(blocks[index])
  blocks = Array.from(document.querySelectorAll('.block'))
  blocks[index].before(item)
  blocks = Array.from(document.querySelectorAll('.block'))
}

const moveDown = (item) => {
  const index = blocks.findIndex((block) => block === item) + ITEMS_STACK
  if (index >= blocks.length) return
  item.before(blocks[index])
  blocks = Array.from(document.querySelectorAll('.block'))
  blocks[index].after(item)
  blocks = Array.from(document.querySelectorAll('.block'))
}

const play = (e) => {
  if (e.target.closest('.arrow.left')) {
    moveLeft(e.target.closest('.block'))
  } else if (e.target.closest('.arrow.right')) {
    moveRight(e.target.closest('.block'))
  } else if (e.target.closest('.arrow.top')) {
    moveUp(e.target.closest('.block'))
  } else if (e.target.closest('.arrow.bottom')) {
    moveDown(e.target.closest('.block'))
  }
}

squareBody.addEventListener('click', play)

btnReset.addEventListener('click', reset)
