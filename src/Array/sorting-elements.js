const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// inverter ordem do array
const reverseNumbers = numbers.reverse()
console.log(reverseNumbers)

const sortNumbers = reverseNumbers.sort((a, b) => a - b)
console.log(sortNumbers)
