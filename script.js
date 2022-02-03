'use strict'

const init = () => {
  let play = confirm('Поиграем?')

  const getUserNumber = (input) => {
    if (input === null) return null
    if (!isNaN(parseFloat(input)) && isFinite(input)) {
      if (input <= 100) return parseFloat(input)
      return 'limit'
    }
    return 'repeat'
  }

  const startGame = (value) => {
    if (!value) return

    const random = Math.floor(Math.random() * 100 + 1)
    let startNum = getUserNumber(prompt('Угадай число от 1 до 100'))
    let times = 10
    let message
    let newGame

    const compareNumbers = (num) => {
      times--

      if (times <= 0) {
        message = 'Попытки закончились, хотите сыграть еще?'
        return
      }

      if (random === num) {
        message = 'Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'
        return
      }

      if (num === null) {
        message = 'Хотите сыграть еще?'
        return
      }

      if (num === 'repeat') {
        num = getUserNumber(prompt(`Введи число! Осталось ${times} попыток.`))
      } else if (num === 'limit') {
        num = getUserNumber(
          prompt(`Число должно быть меньше 100! Осталось ${times} попыток.`)
        )
      } else if (random > num) {
        num = getUserNumber(
          prompt(`Загаданное число больше, осталось ${times} попыток.`)
        )
      } else if (random < num) {
        num = getUserNumber(
          prompt(`Загаданное число меньше, осталось ${times} попыток.`)
        )
      }

      // For testing purposes
      console.log(`user input: ${num}, random: ${random}`)

      compareNumbers(num)
    }

    if (startNum === null) {
      alert('Игра окончена. До следующего раза!')
      return
    }

    compareNumbers(startNum, times)

    newGame = confirm(message)
    startGame(newGame)
  }

  if (!play) {
    alert('Хорошо, поиграем в следующий раз.')
    return
  }
  startGame(play)
}

init()
