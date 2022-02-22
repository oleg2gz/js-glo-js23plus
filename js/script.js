const userInput = document.getElementById('user-input')
const inputText = document.getElementById('input-text')
let inputTimeout

userInput.addEventListener('input', () => {
  clearTimeout(inputTimeout)

  inputTimeout = setTimeout(() => {
    inputText.textContent = userInput.value
  }, 300)
})
