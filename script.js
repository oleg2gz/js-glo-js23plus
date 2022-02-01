'use strict'

const userString = ' КаЛьКулятор Верстки и другие приключения Шурика'
// const userString = NaN

const remakeString = (str) => {
  if (typeof str !== 'string') {
    console.warn('Не получена строка для обработки!')
    return null
  }
  str = str.trim()

  return str.length > 30 ? str.substring(0, 30) + '...' : str
}

console.log(remakeString(userString))
