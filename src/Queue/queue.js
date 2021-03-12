class Queue {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  enqueue (element) {
    this.items[this.count] = element
    this.count++
  }

  dequeue () {}

  peek () {}

  isEmpty () {}

  size () {}
}

export default Queue
