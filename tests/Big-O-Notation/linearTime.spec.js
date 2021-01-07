const { expect } = require('chai')
const {
  exampleLinear,
  exampleQuadratic,
  exampleCubic,
  exampleLogarithmic
} = require('../../src/Big-O-Notation/linearTime')
const { describe, it } = require('mocha')

describe('Big O Notation', () => {
  it('Example of an O(n) linear time, printing number from 0 to n-1', () => {
    const result = exampleLinear(10)
    expect(result.length).to.equal(10)
  })

  it('Example of an O(n²) quadratic time, printing number from 0 to n-1', () => {
    const result = exampleQuadratic(10)
    expect(result.length).to.equal(55)
  })

  it('Example of an O(n³) cubic time, printing number from 0 to n-1', () => {
    const result = exampleCubic(10)
    expect(result.length).to.equal(55)
  })

  it('Example algorithm of logaritmic time complexity, that are a power of 2 between 2 and n.', () => {
    const result = exampleLogarithmic(1000000)
    expect(result.length).to.equal(19)
  })
})
