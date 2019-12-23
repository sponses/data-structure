class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}
class DoublyLinkedList {
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  add(val) {
    const node = new ListNode(val)

    if (this.length) {
      node.prev = this.tail
      this.tail.next = node
      this.tail = this.tail.next
    } else {
      this.head = node
      this.tail = node
    }
    this.length++
    return true
  }

  search(index) {
    if (index < 0 || index > this.length) return false
    let mid = Math.ceil(this.length / 2),
      start = this.head,
      end = this.tail,
      node = null
    if (index <= mid) {
      while (index >= 1) {
        node = start
        start = start.next
        index--
      }
    } else {
      while (this.length - index >= 0) {
        node = end
        end = end.prev
        index++
      }
    }
    return node
  }

  remove(index) {
    let node = this.search(index)
    if (node === this.head) {
      this.head.next.prev = null
      this.head = this.head.next
    }
    if (node === this.tail) {
      this.tail = this.tail.prev
      this.tail.next = null
    }
    node.prev.next = node.next
    node.next.prev = node.prev
    this.length--
  }
}
