/**
 * quick find
 *
 * 结构：[0, 4, 4, 4, 4, 5, 6, 7, 8, 9]
 *
 * 初始化阶段：
 * 0,1,2,3,4,5,6,7,8,9（数据即索引）
 * --------------------
 * 0,1,2,3,4,5,6,7,8,9（集合id）
 *
 * 一系列合并操作后:
 * 0,1,2,3,4,5,6,7,8,9（数据即索引）
 * --------------------
 * 0,4,4,4,4,5,6,7,8,9（集合id）
 *
 * 如上：数据1,2,3,4同属一个集合
 */
class QuickFind {
  constructor(size) {
    this.ids = this.init(size)
  }

  //初始化
  init(size) {
    let res = []
    for (let i = 0; i < size; i++) {
      res[i] = i
    }
    return res
  }

  //查找
  find = index => {
    if (index < 0 || index >= this.ids.length)
      throw Error('index is out of bound')
    return this.ids[index]
  }

  //判断是否属于同一个集合
  isConnected(p, q) {
    let pIndex = this.find(p),
      qIndex = this.find(q)
    return pIndex === qIndex
  }

  //合并
  union(p, q) {
    let pIndex = this.find(p),
      qIndex = this.find(q)
    if (pIndex === qIndex) return

    for (let i = 0, len = this.ids.length; i < len; i++) {
      if (this.ids[i] === pIndex) this.ids[i] = qIndex
    }
  }

  //并查集元素总和
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
 * quick union
 *
 * //每个节点本身有一个指针，指向另一个元素
 * //数组存放的就是指针
 * 结构：[0, (2),(3),(4), 4, 5, 6, 7, 8, 9]
 *
 * 初始化阶段：
 * 0,1,2,3,4,5,6,7,8,9（数据即索引）
 * --------------------
 * 0,1,2,3,4,5,6,7,8,9（集合id）
 *
 * 一系列合并操作后：
 * 0, 1 , 2 , 3 ,4,5,6,7,8,9（数据即索引）
 * -------------------------
 * 0,(2),(3),(4),4,5,6,7,8,9（集合id）
 * 如上：(2)表示第二个元素所在的节点指向了2这个元素
 * 数据1,2,3,4同属一个集合
 */
class QuickUnion {
  constructor(size) {
    this.ids = this.init(size)
    this.branch = new Array(size)
    this.branch.fill(1)
  }

  //初始化
  init(size) {
    let res = []
    for (let i = 0; i < size; i++) {
      res[i] = i
    }
    return res
  }

  //查找
  find = index => {
    if (index < 0 || index >= this.ids.length)
      throw Error('index is out of bound')

    while (index !== this.ids[index]) index = this.ids[index]
    return index
  }

  //判断是否属于同一个集合
  isConnected(p, q) {
    let pIndex = this.find(p),
      qIndex = this.find(q)
    return pIndex === qIndex
  }

  //合并
  union(p, q) {
    let pIndex = this.find(p),
      qIndex = this.find(q)
    if (pIndex === qIndex) return
    if (this.branch[pIndex] >= this.branch[qIndex]) {
      this.ids[pIndex] = qIndex
      this.branch[qIndex] += this.branch[pIndex]
      return
    }
    this.ids[qIndex] = pIndex
    this.branch[pIndex] += this.branch[qIndex]
  }

  //并查集元素总和
  sizeOfElement() {
    return this.ids.length
  }
}

const test = new QuickUnion(6)
test
test.find(3)
test.union(0, 3)
