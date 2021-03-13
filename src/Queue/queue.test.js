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

  test('Adicionar elementos para fila', () => {
    queue.enqueue('Paulo')
    queue.enqueue('Vanessa')
    queue.enqueue('Thomas')
    const elmFila = queue.toString()
    // console.log(elmFila)
    expect(elmFila).to.equal('Paulo,Vanessa,Thomas')
  })

  test('Confirmar se o tamanho da fila é igual ao que foi adcionado', () => {
    expect(queue.size()).to.equal(3)
  })

  test('Confirmar que a fila não está vazia', () => {
    expect(queue.isEmpty()).to.equal(false)
  })

  test('Confirmar que a saída da fila siga o modelo LIFO', () => {
    const saidaFila = queue.dequeue()
    // console.log(saidaFila)
    expect(saidaFila).to.equal('Paulo')
    expect(queue.size()).to.equal(2)
  })
})
