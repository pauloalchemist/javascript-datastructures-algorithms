const { describe, it, beforeEach } = require('mocha')
const { expect } = require('chai')
const Stack = require('../../src/stacks/stack')

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  it('stack starts empty', () => {
    expect(stack.size()).to.equal(0)
    expect(stack.isEmpty()).to.equal(true)
  })

  it('stack pushes elements', () => {
    stack.push(50)
    stack.push(90)

    expect(stack.size()).to.equal(2)
    expect(stack.isEmpty()).to.equal(false)
  })

  it('remove elements from the stack with LIFO logic', () => {
    stack.push(50)
    stack.push(90)
    stack.push(110)

    expect(stack.pop()).to.equal(110)
    expect(stack.pop()).to.equal(90)
    expect(stack.pop()).to.equal(50)
    expect(stack.isEmpty()).to.equal(true)
  })

  it('peeking the top of the stack', () => {
    stack.push(50)
    stack.push(90)
    stack.push(110)
    stack.push(200)

    expect(stack.peek()).to.equal(200)
    expect(stack.isEmpty()).to.equal(false)
  })

  it('clearing the stack', () => {
    stack.push(50)
    stack.push(90)
    stack.push(110)
    stack.push(200)

    stack.clear()
    expect(stack.isEmpty()).to.equal(true)
  })
})
