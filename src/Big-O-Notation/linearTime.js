module.exports = {
  exampleLinear (n) {
    const array = []
    for (let i = 0; i < n; i++) {
      array.push(i)
    }
    return array
  },

  exampleQuadratic (n) {
    const array = []
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        array.push(j)
      }
    }
    return array
  },

  exampleCubic (n) {
    const array = []
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        for (let k = j; j < n; j++) {
          array.push(k)
        }
      }
    }
    return array
  },

  exampleLogarithmic (n) {
    const array = []
    for (let i = 2; i <= n; i = i * 2) {
      array.push(i)
    }
    return array
  }
}
