class minHeap {
  constructor(props) {
    this.heap = [null]
    if (Array.isArray(props)) this.init(props)
  }

  /**
   * 接收一个数组作为初始化堆的数据
   * @param {number[]} arr
   */
  init = (arr) => {
    for (let i = 0, len = arr.length - 1; i < len; i++) {
      this.insert(arr[i])
    }
  }

  /**
   * 插入
   * @param {number} num
   */
  insert = (num) => {
    this.heap.push(num)
    let i = this.heap.length - 1
    let p = i >> 1
    while (i > 1 && this.heap[i] < this.heap[p]) {
      ;[this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]
      i = p
      p = i >> 1
    }
  }
}
