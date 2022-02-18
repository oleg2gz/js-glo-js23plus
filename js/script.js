'use strict'

class First {
  hello() {
    console.log('Привет я метод родителя!')
  }
}

class Second extends First {
  hello() {
    super.hello()
    console.log('А я наследуемый метод!')
  }
}

const first = new First()
const second = new Second()

console.log('Run for first:')
first.hello()
console.log('Run for second:')
second.hello()
