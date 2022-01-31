'use strict'

/* 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
 Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу */

const weekdaysObj = {
  en: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  ru: [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ],
}

const weekdaysArr = [
  ['Sunday', 'воскресенье'],
  ['Monday', 'понедельник'],
  ['Tuesday', 'вторник'],
  ['Wednesday', 'среда'],
  ['Thursday', 'четверг'],
  ['Friday', 'пятница'],
  ['Saturday', 'суббота'],
]

const renderWeekdays = (lang, dict = weekdaysObj) => {
  if (Array.isArray(dict)) {
    const pos = lang === 'ru' ? 1 : 0
    weekdaysArr.forEach((day) => console.log(day[pos]))
  } else if (typeof dict === 'object' && dict != null) {
    weekdaysObj[lang].forEach((day) => console.log(day))
  }
}

const lang = 'ru'
// const lang = 'en'
// const lang = 'zh'

// a) через if
if (lang === 'ru') {
  renderWeekdays('ru')
} else if (lang === 'en') {
  renderWeekdays('en')
}

// b) через switch-case
switch (lang) {
  case 'ru':
    renderWeekdays('ru')
    break
  case 'en':
    renderWeekdays('en')
    break
  default:
    console.warn('Unknown language')
}

// c) через многомерный массив без ифов и switch.
renderWeekdays(lang, weekdaysArr)

/* 2) У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
 Решить задачу с помощью нескольких тернарных операторов, без использования if или switch. */

const namePerson = 'Артем'
// const namePerson = 'Александр'
// const namePerson = 'Олег'

console.log(
  namePerson === 'Артем'
    ? 'директор'
    : namePerson === 'Александр'
    ? 'преподаватель'
    : 'студент'
)
