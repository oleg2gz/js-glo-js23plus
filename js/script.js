// функция принимает в качестве аргументов значение типа данных
// и примеры из поля ввода
const filterByType = (type, ...values) =>
    // фильтрует примеры по переданному типу данных и возвращает массив из них
    values.filter((value) => typeof value === type),
  // функция,
  hideAllResponseBlocks = () => {
    // которая превращает в массив
    const responseBlocksArray = Array.from(
      // все собранные со страницы блоки с сообщениями
      document.querySelectorAll('div.dialog__response-block')
    )
    // все собранные блоки перебираеются и скрываются с помощью стилей
    responseBlocksArray.forEach((block) => (block.style.display = 'none'))
  },
  // функция получает селекторы элементов и сообщение
  showResponseBlock = (blockSelector, msgText, spanSelector) => {
    // вызывает функцию скрытия всех выводимых на страницу сообщений
    // (которые были открыты)
    hideAllResponseBlocks()
    // находит по селектору элемент и делает его видимым
    document.querySelector(blockSelector).style.display = 'block'
    // если был передан селектор спана
    if (spanSelector) {
      // находит этот спан и выводит в него текст полученного сообщения
      document.querySelector(spanSelector).textContent = msgText
    }
  },
  // функция получает сообщение об ошибке и отправляет его с другими
  // аргументами в функцию вывода на страницу
  showError = (msgText) =>
    showResponseBlock('.dialog__response-block_error', msgText, '#error'),
  // функция получает результат обработки полей "Тип данных" и "Данные"
  // и передаёт его с другими аргументами
  // следующей функции для вывода на страницу
  showResults = (msgText) =>
    showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),
  // функция выводит на страницу сообщение о том,
  // что нет результатов для вывода на страницу
  showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),
  // функция принимает значения полей "Тип данных" и "Данные"
  tryFilterByType = (type, values) => {
    // в блоке обработки ошибок
    try {
      // массив-результат фильтрации данных по выбранному типу
      // превращается с строку
      const valuesArray = eval(`filterByType('${type}', ${values})`).join(', ')
      // в переменную присваивается значение в зависимости от условия
      // если это не пустая строка
      const alertMsg = valuesArray.length
        ? // то записывается сообщение о типах и все выбранных значения этого типа
          `Данные с типом ${type}: ${valuesArray}`
        : // иначе собщается, что данных выбранного типа небыло введено
          `Отсутствуют данные типа ${type}`
      // полученное сообщение отправляется в функцию вывода в поле "Результаты"
      showResults(alertMsg)
      // блок обработки ошибок
    } catch (e) {
      // содержание ошибки отправляется в функцию
      // для дальнейшего вывода на странице (через ещё одну функцию)
      showError(`Ошибка: ${e}`)
    }
  }

// получение со страницы кнопки "Фильтровать"
const filterButton = document.querySelector('#filter-btn')

// слушатель события на кнопке "Фильтровать"
filterButton.addEventListener('click', (e) => {
  // получение со страницы селекта "Тип данных"
  const typeInput = document.querySelector('#type')
  // и поля ввода "Данные"
  const dataInput = document.querySelector('#data')

  // если в поле ввода "Данные" ничего не введено,
  if (dataInput.value === '') {
    // то при при клике будет выводиться кастомное сообщение
    dataInput.setCustomValidity('Поле не должно быть пустым!')
    // в "Результаты" будет выведено сообщение "Пока что нечего показать."
    showNoResults()
    // иначе
  } else {
    // кастомных сообщений не будет показано (будет обнулено)
    dataInput.setCustomValidity('')
    // отмена перезагрузки формы при сабмите
    e.preventDefault()
    // у строковых значений полей "Тип данных" и "Данные"
    // будут обрезаны пробелы с начала и конца строки
    // и они будут отправлены на обработку в функцию
    tryFilterByType(typeInput.value.trim(), dataInput.value.trim())
  }
})
