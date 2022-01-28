// 1) Создать переменную num со значением 266219 (тип данных число)

const num = 266219

// 2) Вывести в консоль произведение (умножение) цифр этого числа

let result = num
  .toString()
  .split('')
  .reduce((acc, item) => (acc *= item))

console.log(result)

// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)

result **= 3

// 4) Вывести в консоль первые 2 цифры полученного числа

result = parseInt(result.toString().slice(0, 2))

console.log(result)
