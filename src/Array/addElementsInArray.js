let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.push(11, 12, 13)
console.log('Array com inserção de 11, 12 e 13 nas ultimas posições usando push: ', numbers)

Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1]
  }
  this[0] = value
}

numbers.insertFirstPosition(-1)
console.log('Array com inserção de -1 na primeira posição usando prototype: ', numbers)

numbers.unshift(-2, -3)
console.log('Array com inserção de -2 e -3 nas primeiras posições usando unshift: ', numbers)

numbers.shift()
console.log('Array com remoção do primeiro item usando shift: ', numbers)

numbers.splice(5, 3)
console.log('Array com remoção a partir da posição [5], removendo três itens, usando splice: ', numbers)

numbers.splice(5, 0, 3, 4, 5)
console.log('Array com inserção a partir da posição [5] dos três itens excluidos usando splice: ', numbers)

numbers.splice(5, 3, 3, 4, 5)
console.log('Array com remoção e inserção a partir da posição [5] de 3, 4, 5 usando splice: ', numbers)
