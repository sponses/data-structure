/**
 * 单向循环链表
 * 结构：{val:1,next{val:2,next:null}}
 */
class SingleNode {
  /**
   * Initialize  SingleNode structure here.
   * @param {any} val
   */
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class SinglyLinkList {
  /**
   * Initialize  SinglyLinkList structure here.
   */
  constructor() {
    this.head = null
    this.size = 0
  }
  /**
   * Checks whether the SinglyLinkList is empty or not.
   * @return {boolean}
   */
  isEmpty() {
    return this.size === 0
  }
  /**
   * Get the size of the SinglyLinkList.
   * @return {number}
   */
  getSize() {
    return this.size
  }
  /**
   * Add item from the front of the SinglyLinkList
   * @param {any} val
   * @return {boolean}
   */
  add(val) {
    if (val === '') return false
    let newNode = new SingleNode(val)
    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    return true
  }
  /**
   * Add item from the rear of the SinglyLinkList
   * @param {any} val
   * @return {boolean}
   */
  append(val) {
    if (val === '') return false
    let newNode = new SingleNode(val)
    if (!this.head) {
      this.head = newNode
    } else {
      let temp = this.head
      while (temp.next) {
        temp = temp.next
      }
      temp.next = newNode
    }
    return true
  }
  /**
   * Add item into the SinglyLinkList at the specified index
   * @param {number} index
   * @param {any} val
   * @return {boolean}
   */
  insert(index, val) {
    if (index < 0 || index > this.size + 1 || val === '') return false
  }
  // is_empty() 链表是否为空
  // length() 链表长度
  // travel() 遍历整个链表
  // add(item) 链表头部添加元素
  // append(item) 链表尾部添加元素
  // insert(pos, item) 指定位置添加元素
  // remove(item) 删除节点
  // search(item) 查找节点是否存在
}

class DoublyLinkedList {}
class CircularLinkedList {}
