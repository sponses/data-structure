class CircularQueue {
  constructor(k) {
    this.queue = new Array(k)
    this.size = k
    this.count = 0
    this.front = 0
    this.rear = 0
  }

  enQueue(val) {
    if (this.isFull()) return false

    this.rear = val
    this.rear = (this.rear + 1) % this.size
    this.count++
    return true
  }
  dequeue() {
    if (this.isEmpty()) return false

    this.front = (this.front + 1) % this.size
    this.count--
    return true
  }
  Rear() {
    if (this.isEmpty()) return false

    let temp = this.rear ? this.rear - 1 : this.size - 1
    return this.queue[temp]
  }
  Front() {
    if (this.isEmpty()) return false
    return this.queue[this.front]
  }
  isFull() {
    return this.count === this.size
  }
  isEmpty() {
    return this.count === 0
  }
}
