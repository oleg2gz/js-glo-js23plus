const books = document.querySelectorAll('.book')
const book2Chapters = books[0].querySelectorAll('li')
const book5Chapters = books[5].querySelectorAll('li')
const book6Chapters = books[2].querySelectorAll('li')
const book6Chapter8 = document.createElement('li')

// Восстановить порядок книг.
books[0].before(books[1])
books[0].after(books[4])
books[5].after(books[2])

// Заменить картинку заднего фона на другую из папки image
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

// Исправить заголовок в книге 3 на "Книга 3. this и Прототипы Объектов"
books[4].querySelector('h2 > a').textContent =
  'Книга 3. this и Прототипы Объектов'

// Удалить рекламу со страницы
document.querySelector('div.adv').remove()

// Восстановить порядок глав во второй и пятой книге
book2Chapters[3].after(book2Chapters[6])
book2Chapters[6].after(book2Chapters[8])
book2Chapters[9].before(book2Chapters[7])
book2Chapters[10].before(book2Chapters[2])

book5Chapters[1].after(book5Chapters[9])
book5Chapters[4].after(book5Chapters[2])
book5Chapters[7].after(book5Chapters[5])

// В шестой книге добавить главу “Глава 8: За пределами ES6”
book6Chapter8.textContent = 'Глава 8: За пределами ES6'
book6Chapters[9].before(book6Chapter8)
