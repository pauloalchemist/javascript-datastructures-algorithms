// Array de duas dimensões
let averageTemp = []
averageTemp[0] = [34, 45, 32, 37, 49, 33, 77]
averageTemp[1] = [34, 32, 31, 44, 39, 36]

console.table(averageTemp)

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.table(myMatrix[i][j])
    }
  }
}

printMatrix(averageTemp)

// dia 1
averageTemp[0] = []
averageTemp[0][0] = 32
averageTemp[0][1] = 44
averageTemp[0][2] = 35
averageTemp[0][3] = 31
averageTemp[0][4] = 38
// dia 2
averageTemp[1] = []
averageTemp[1][0] = 34
averageTemp[1][1] = 40
averageTemp[1][2] = 28
averageTemp[1][3] = 39
averageTemp[1][4] = 41

console.table(averageTemp)

const matrix3x3x3 = []
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = []
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = []
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z
    }
  }
}

console.table(matrix3x3x3)

for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
      console.table(matrix3x3x3[i][j][z])
    }
  }
}