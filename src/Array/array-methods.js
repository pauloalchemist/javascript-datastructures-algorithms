// concat
const zero = 0
const positiveNumbers = [1, 2, 3]
const negativeNumbers = [-3, -2, -1]
const numbers = negativeNumbers.concat(zero, positiveNumbers)

console.log(numbers)

// every (itera cada elemento do array até que a função passada retorne falso)
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const isEven = x => x % 2 === 0
const checkDividerTwo = arrayNumbers.every(isEven)
console.log(checkDividerTwo)
