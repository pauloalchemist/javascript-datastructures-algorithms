// concat
const zero = 0
const positiveNumbers = [1, 2, 3]
const negativeNumbers = [-3, -2, -1]
const numbers = negativeNumbers.concat(zero, positiveNumbers)

console.log(numbers)

// every (itera cada elemento do array até que a função passada retorne falso)
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const isEven = x => x % 2 === 0
const checkDividerTwoEWithEvery = arrayNumbers.every(isEven)
console.log(checkDividerTwoEWithEvery)
// some (itera cada elemento do array até que a função passada retorne verdadeiro)
const checkDividerTwoWithSome = arrayNumbers.some(isEven)
console.log(checkDividerTwoWithSome)

// forEach iterar o array completo independente do resultado
arrayNumbers.forEach(x => console.log(x % 2 === 0))

// map armazena o resultado e filter retorna os elementos conforme a função passada. Amboas retornam novos arrays.
const myMap = arrayNumbers.map(isEven)
console.log(myMap)
const evenNumbers = arrayNumbers.filter(isEven)
console.log(evenNumbers)

// reduce
const myReduce = arrayNumbers.reduce((previous, current) => previous + current)
console.log(myReduce)

// iterando usando for...of
for (const n of arrayNumbers) {
  console.log(n % 2 === 0 ? 'even' : 'odd')
}

const iterator = arrayNumbers[Symbol.iterator]()
for (const n of iterator) {
  console.log(n)
}

// entries: itera a chave e valor de cada elemento no array
const aEntries = arrayNumbers.entries()
for (const m of aEntries) {
  console.log(m)
}

// keys: itera as chaves de cada valor
const aKeys = arrayNumbers.keys()
for (const k of aKeys) {
  console.log(k)
}

// values: itera os valores de cada elemento no array
const aValues = arrayNumbers.values()
for (const v of aValues) {
  console.log(v)
}

// from Method
const numbers2 = Array.from(arrayNumbers)
console.log(numbers2)
const evens = Array.from(arrayNumbers, x => (x % 2 === 0))
console.log(evens)
