'use strict'

/* Создать массив week и записать в него дни недели в виде строк
- Вывести на экран все дни недели, каждый с новой строчки
- Выходные дни - курсивом
- Текущий день - жирным шрифтом(использовать объект даты)
*/

const weekdayStyle = {
  weekdays: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  styles: {
    bold: 'font-weight: bold;',
    italic: 'font-style: italic;',
    boldItalic: 'font-weight: bold; font-style: italic;',
  },
  show() {
    this.weekdays.forEach((day, i) => {
      if ((i === new Date().getDate() + 1 && i === 0) || i === 6) {
        this.styleDay(day, 'boldItalic')
      } else if (i === 0 || i === 6) {
        this.styleDay(day, 'italic')
      } else if (i === new Date().getDate() + 1) {
        this.styleDay(day, 'bold')
      } else {
        this.styleDay(day)
      }
    })
  },
  styleDay(day, style) {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<p style="${this.styles[style]}">${day}</p>`
    )
    console.log('%c' + day, this.styles[style])
  },
}

weekdayStyle.show()
