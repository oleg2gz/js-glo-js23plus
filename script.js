'use strict'

let timers = []

const formatDate = (format) => {
  const date = new Date()
  const dateString = date
    .toLocaleString('ru-Ru', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .replace('г.', 'года')
  const dateNumeric = date.toLocaleString('ru-Ru', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
  const dateWatch = date.toLocaleString('ru-Ru', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })

  // Окончания для "час, минута, секунда"

  const adjustEnding = (str, type) => {
    const last = +str[str.length - 1]

    if (
      (last === 2 && str != 12) ||
      (last === 3 && str != 13) ||
      (last === 4 && str != 14)
    ) {
      if (type === 'hour') return 'а'
      else return 'ы'
    } else if (last === 1 && str != 11) {
      if (type === 'hour') return ''
      else return 'а'
    } else {
      if (type === 'hour') return 'ов'
      else return ''
    }
  }

  // Время в формате "21 час 5 минут 33 секунды"

  const hrMinSec = dateWatch
    .split(':')
    .map((item, i) => {
      if (i === 0) return `${item} час${adjustEnding(item, 'hour')}`
      if (i === 1) return `${item} минут${adjustEnding(item)}`
      if (i === 2) return `${item} секунд${adjustEnding(item)}`
    })
    .join(' ')
    .trim()

  return format === 'full'
    ? `Сегодня ${
        dateString[0].toUpperCase() + dateString.slice(1)
      }, ${hrMinSec}`
    : `${dateNumeric} - ${dateWatch}`
}

// Создание разметки для вывода на странице

const renderMarkup = () => {
  for (let i = 0; i < 2; i++) {
    const p = document.createElement('p')

    if (i === 0) {
      p.textContent = formatDate('full')
    } else if (i === 1) {
      p.textContent = formatDate()
    }
    timers.push(p)
    document.body.append(p)
  }
}

renderMarkup()

setInterval(() => {
  timers[0].textContent = formatDate('full')
  timers[1].textContent = formatDate()
}, 1000)

// Функция, которая добавляет 0 перед значениями, состоящими из одной цифры
// (из 9:5:3 1.6.2019 сделает 09:05:03 01.06.2019)

const adjustNumber = (str) => {
  if (str.length < 2) return 0 + str
  return str
}

console.log(adjustNumber('21'))
console.log(adjustNumber('9'))
