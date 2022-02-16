'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector
  this.height = height
  this.width = width
  this.bg = bg
  this.fontSize = fontSize
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
  elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; fontSize: ${this.fontSize}px;`
  elem.textContent = 'MIROMAX!'
  document.body.append(elem)
}

const squareMaker = new DomElement('.square', 150, 150, 'red', 18)
squareMaker.createElement()

// пример:
// если передана строка '.block', то функция конструктор создает элемент с class="block"

// если передана строка '#best', то функция конструктор создает элемент с id =best"

// Внутрь созданного блока записывать любой текст. Метод записи может быть любым.

// 2) Создать новый объект на основе класса DomElement

// 3) Вызвать его метод чтобы создать элемент на странице

// УСЛОЖНЕННОЕ  ЗАДАНИЕ: 1 БАЛЛ

// 1) Используя функцию-конструктор DomElement из основного задания №1, создать квадрат 100 на 100 пикселей. Ему необходимо задать фон(background) любого цвета и свойство position: absolute.

// 2) Поместить его на страницу только после выполнения события DOMContentLoaded. Внутри тега body должно быть только подключение скрипта. (В случае подключения файла скрипта к странице перед закрывающим тэгом body)

// 3) Написать обработчик события для keydown, который будет принимать callback-функцию. Данная функция будет отлавливать нажатие на стрелки клавиатуры. В зависимости от нажатой кнопки(Вверх - стрелка вверх, Влево - стрелка влево, Вправо - стрелка вправо, Вниз - стрелка вниз) наш квадрат будет перемещаться на 10 пикселей при каждом нажатии.
