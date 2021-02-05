const { describe, it, beforeEach } = require('mocha')
const { expect } = require('chai')
const StackArray = require('../../src/stacks/stack-array')

describe('StackArray', () => {
  let stack

  beforeEach(() => {
    stack = new StackArray()
  })

  it('starts empty', () => {
    expect(stack.size()).to.equal(0)
    expect(stack.isEmpty()).to.equal(true)
  })

  it('pushes elements', () => {
    stack.push(1)
    expect(stack.size()).to.equal(1)
    stack.push(2)
    expect(stack.size()).to.equal(2)
    stack.push(3)
    expect(stack.size()).to.equal(3)

    expect(stack.isEmpty()).to.equal(false)
  })

  it('pops elements and implements LIFO logic', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.pop()).to.equal(stack[stack.peek()])
    expect(stack.pop()).to.equal(stack[stack.peek()])
    expect(stack.pop()).to.equal(stack[stack.peek()])
    expect(stack.pop()).to.equal(undefined)
  })

  it('retuns the correct size', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)

    expect(stack.size()).to.equal(3)

    stack.clear()
    expect(stack.isEmpty()).to.equal(true)
    expect(stack.size()).to.equal(0)
  })
})
