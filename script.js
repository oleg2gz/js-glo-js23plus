'use strict'

/* 1) Создать массив arr = []
— Записать в него 7 любых многозначных чисел в виде строк
— Вывести в консоль только те, что начинаются с цифры 2 или 4 */

const arr = ['24', '576', '91', '238', '45', '336', '444']

arr.forEach((num) => {
  if (num[0] === '2' || num[0] === '4') {
    console.log(num)
  }
})

/* 2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
— Рядом с каждым числом написать оба делителя данного числа
  Например: “Делители этого числа: 1 и n” */

const isPrime = (num) => {
  let flag = true

  for (let i = 2; i < num; i++) {
    if (num % i !== 0) continue
    flag = false
  }
  return flag
}

for (let i = 2; i <= 100; i++) {
  if (!isPrime(i)) continue
  console.log(`Делители этого числа: 1 и ${i}`)
}
