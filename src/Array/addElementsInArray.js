let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.push(11, 12, 13)

console.log(numbers.length)

Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1]
  }
  this[0] = value
}

numbers.insertFirstPosition(-1)

console.log('Array com inserção de -1 na primeira posição usando prototype: ', numbers)