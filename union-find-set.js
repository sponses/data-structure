/**
 * quick find
 *
 * 结构：[0, 4, 4, 4, 4, 5, 6, 7, 8, 9]
 *
 * 初始化阶段：
 * 0,1,2,3,4,5,6,7,8,9（数据）
 * --------------------
 * 0,1,2,3,4,5,6,7,8,9（集合id）
 *
 * 一系列合并操作后:
 * 0,1,2,3,4,5,6,7,8,9（数据）
 * --------------------
 * 0,4,4,4,4,5,6,7,8,9（集合id）
 *
 * 如上：数据1,2,3,4同属一个集合
 */
class QuickFind {
  /**
   * Initialize your data structure here. Set the size of the QuickFind to be size.
   * @param {number} size
   */
  constructor(size) {
    this.ids = []
    for (let i = 0; i < size; i++) {
      this.ids[i] = i
    }
  }
  /**
   * Finds an item from QuickFind. Return the value if the operation is successful.
   * @param {number} index
   * @return {number}
   */
  find = index => {
    return this.ids[index]
  }

  /**
   * Return the true if two params is connected.
   * @param {number} p
   * @param {number} q
   * @return {boolean}
   */
  isConnected = (p, q) => {
    return this.ids[p] === this.ids[q]
  }

  /**
   * Merge the two params. Return true if the operation is successful.
   * @param {number} p
   * @param {number} q
   * @return {boolean}
   */
  union(p, q) {
    if (this.isConnected(p, q)) return false
    let pId = this.find(p),
      qId = this.find(q)
    for (let i = 0; i < this.ids.length; i++) {
      if (pId === this.ids[i]) this.ids[i] = qId
    }
    return true
  }

  /**
   * Return the length of the QuickFind.
   * @return {number}
   */
  sizeOfElement() {
    return this.ids.length
  }
}

// 测试代码
// const test = new QuickFind(10)
// test.find(5)
// test.union(3, 4)
// test.union(3, 4)

/**
 * quick union --- 秩合并优化
 *
 * //每个节点本身有一个指针，指向另一个元素
 * //数组存放的就是指针
 * 结构：[0, 2 , 3 , 4 , 4, 5, 6, 7, 8, 9]
 *
 * 初始化阶段：
 * 0,1,2,3,4,5,6,7,8,9（数据）
 * --------------------
 * 0,1,2,3,4,5,6,7,8,9（集合id）
 *
 * 一系列合并操作后：
 * 0,1,2,3,4,5,6,7,8,9（数据）
 * -------------------------
 * 0,2,3,4,4,5,6,7,8,9（集合id）
 * 如上：2表示第二个元素所在的节点指向了2这个元素
 * 数据1,2,3,4同属一个集合
 */
class QuickUnion {
  /**
   * Initialize your data structure here. Set the size of the QuickFind to be size.
   * @param {number} size
   */
  constructor(size) {
    this.ids = []
    this.branch = []
    for (let i = 0; i < size; i++) {
      this.ids[i] = i
      this.branch[i] = 1
    }
  }

  /**
   * Finds an item from QuickFind. Return the value if the operation is successful.
   * @param {number} index
   * @return {number}
   */
  find = index => {
    if (index < 0 || index >= this.ids.length) return -1
    while (index !== this.ids[index]) index = this.ids[index]
    return index
  }

  /**
   * Return true if two params is connected.
   * @param {number} p
   * @param {number} q
   * @return {boolean}
   */
  isConnected = (p, q) => {
    let pId = this.find(p),
      qId = this.find(q)
    if (pId === -1 || qId === -1) return false
    return pId === qId
  }

  /**
   * Merge the two params. Return true if the operation is successful.
   * @param {number} p
   * @param {number} q
   * @return {boolean}
   */
  union(p, q) {
    let pId = this.find(p),
      qId = this.find(q)
    if (pId === -1 || qId === -1 || pId === qId) return false
    if (this.branch[pId] >= this.branch[qId]) {
      this.ids[qId] = pId
      this.branch[pId] += this.branch[qId]
    } else {
      this.ids[pId] = qId
      this.branch[qId] += this.branch[pId]
    }

    return true
  }

  /**
   * Return the length of the QuickFind.
   * @return {number}
   */
  sizeOfElement() {
    return this.ids.length
  }
}

// const test = new QuickUnion(6)
// test
// test.find(3)
// test.union(0, 3)
