/**
 * leetcode 641题
 */
class MyCircularDeque {
  /**
   * Initialize your data structure here. Set the size of the deque to be k.
   * @param {number} k
   */
  constructor(k) {
    this.size = k
    this.count = 0
    this.queue = new Array(k)
    this.rear = 0
    this.front = 0
  }

  /**
   * Adds an item at the front of Deque. Return true if the operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  insertFront(value) {
    if (this.isFull()) return false
    this.count++
    this.front = this.front - 1 === -1 ? this.size - 1 : this.front - 1
    this.queue[this.front] = value
    return true
  }

  /**
   * Adds an item at the rear of Deque. Return true if the operation is successful.
   * @param {number} value
   * @return {boolean}
   */
  insertLast(value) {
    if (this.isFull()) return false
    this.queue[this.rear] = value
    this.rear = (this.rear + 1) % this.size
    this.count++
    return true
  }

  /**
   * Deletes an item from the front of Deque. Return true if the operation is successful.
   * @return {boolean}
   */
  deleteFront() {
    if (this.isEmpty()) return false
    this.count--
    this.front = (this.front + 1) % this.size
    return true
  }

  /**
   * Deletes an item from the rear of Deque. Return true if the operation is successful.
   * @return {boolean}
   */
  deleteLast() {
    if (this.isEmpty()) return false
    this.count--
    this.rear = this.rear - 1 === -1 ? this.size - 1 : this.rear - 1
    return true
  }

  /**
   * Get the front item from the deque.
   * @return {number}
   */
  getFront() {
    if (this.isEmpty()) return -1
    return this.queue[this.front]
  }

  /**
   * Get the last item from the deque.
   * @return {number}
   */
  getRear() {
    if (this.isEmpty()) return -1
    let ans = this.rear - 1 === -1 ? this.size - 1 : this.rear - 1
    return this.queue[ans]
  }

  /**
   * Checks whether the circular deque is empty or not.
   * @return {boolean}
   */
  isEmpty = () => {
    return !Boolean(this.count)
  }

  /**
   * Checks whether the circular deque is full or not.
   * @return {boolean}
   */
  isFull = () => {
    return this.count === this.size
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
