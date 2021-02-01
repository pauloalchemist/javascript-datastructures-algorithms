const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// inverter ordem do array
const reverseNumbers = numbers.reverse()
console.log(reverseNumbers)

const sortNumbers = reverseNumbers.sort((a, b) => a - b)
console.log(sortNumbers)

// custom sorting
const friends = [
  { name: 'Flash', age: 40 },
  { name: 'Spider-man', age: 37 },
  { name: 'Hulk', age: 41 }
]

function comparePerson (a, b) {
  if (a.age < b.age) {
    return -1
  }
  if (a.age > b.age) {
    return 1
  }
  return 0
}

console.log(friends.sort(comparePerson))

// sorting strings
const names = ['thomas', 'Thomas', 'paulo', 'Paulo', 'Vanessa', 'vanessa']
const sortNames = names.sort((a, b) => a.localeCompare(b))
console.log(sortNames)

// indexOf e lastIndexOf
console.log(numbers.indexOf(10))
console.log(numbers.indexOf(100))

numbers.push(10)
console.log(numbers.lastIndexOf(10))
console.log(numbers.lastIndexOf(100))

// include
console.log(numbers.includes(15))
console.log(numbers.includes(30))
console.log(numbers.includes(4, 5))
