const { describe, test } = require('mocha')
const { expect } = require('chai')
const Queue = require('./queue')
const queue = new Queue()

describe('teste dos métodos para queue.js', () => {
  test('Confirmar se a fila está vazia', () => {
    const filaVazia = queue.isEmpty()
    // console.log(filaVazia)
    expect(filaVazia).to.equal(true)
  })
})
