/**
 * 小顶堆
 * 数组存储的完全二叉树，
 * 每个节点比其子节点小
 * 结构：[null,1,5,8,7,9,10]
 */
class MinHeap {
  constructor() {
    this.heap = [null]
  }

  //插入
  insert(val) {
    let i = this.heap.length,
      p = Math.floor(i / 2)
    this.heap.push(val)

    while (i > 1) {
      if (this.heap[i] < this.heap[p]) {
        ;[this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]
        i = p
        p = Math.floor(i / 2)
      } else {
        break
      }
    }
  }

  //删除
  del(val) {
    let i = this.heap.indexOf(val)
    if (i === -1) return //要删除的节点与最后一个节点交换位置
    ;[this.heap[i], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[i]
    ]
    //删除最后一个节点
    this.heap.pop()

    //维持小顶堆
    while (2 * i < this.heap.length) {
      let cur = this.heap[i],
        right = this.heap[2 * i + 1],
        left = this.heap[2 * i]

      if (cur <= left && (right === undefined || cur <= right)) return
      if (left <= cur && (right === undefined || left <= right)) {
        ;[this.heap[i], this.heap[2 * i]] = [left, cur]
        i = i * 2
      } else if (right !== undefined && right <= cur && right <= left) {
        ;[this.heap[i], this.heap[2 * i + 1]] = [right, cur]
        i = i * 2 + 1
      }
    }
  }

  //排序（降序）
  sort() {
    if (this.heap.length < 3) return

    for (let i = 1, len = this.heap.length; i < len; i++) {
      //第一个和倒数第i个数交换位置
      ;[this.heap[1], this.heap[len - i]] = [this.heap[len - i], this.heap[1]]

      //维持倒数第i个数之前的所有数为小顶堆
      let f = 1
      while (2 * f < len - i) {
        let cur = this.heap[f],
          left = this.heap[f * 2],
          right = this.heap[f * 2 + 1]

        if (
          cur <= left &&
          (right === undefined || 2 * f + 1 >= len - 1 - i || cur <= right)
        )
          break
        if (
          left < cur &&
          (right === undefined || 2 * f + 1 >= len - 1 - i || left < right)
        ) {
          ;[this.heap[f], this.heap[2 * f]] = [left, cur]
          f = f * 2
        } else if (
          right !== undefined &&
          2 * f + 1 < len - 1 - i &&
          right < cur &&
          right < left
        ) {
          ;[this.heap[f], this.heap[2 * f + 1]] = [right, cur]
          f = f * 2 + 1
        }
      }
    }
  }
  /**
   * 总感觉有bug
   *
   * (≖͞_≖̥)
   *
   * 流下了没技术的眼泪
   *
   * ༼ ༎ຶ ෴ ༎ຶ༽
   */
}

// 测试代码
// const test = new MinHeap()
// test.insert(55)
// test.insert(30)
// test.insert(50)
// test.insert(44)
// test.insert(35)
// test.insert(5)
// test.insert(3)
// test.insert(10)
// test.sort()

/**
 * 大顶堆
 * 数组存储的完全二叉树，
 * 每个节点比其子节点大
 * 结构：[null,7,5,4,3,2,1]
 */
class MaxHeap {
  constructor() {
    this.heap = [null]
  }

  //插入
  insert(value) {
    let i = this.heap.length,
      p = Math.floor(i / 2)
    this.heap.push(value)
    while (i > 1) {
      //插入的值大于父节点，交换位置
      if (this.heap[i] > this.heap[p]) {
        ;[this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]]
        i = p
        p = Math.floor(i / 2)
      } else {
        //插入的值小于父节点，循环结束
        break
      }
    }
  }

  //删除
  del(value) {
    let i = this.heap.indexOf(value)
    if (i === -1) return //要删除的节点与最后一个节点交换位置
    ;[this.heap[i], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[i]
    ]
    //删除最后一个节点
    this.heap.pop()

    while (2 * i < this.heap.length) {
      let cur = this.heap[i],
        right = this.heap[2 * i + 1],
        left = this.heap[2 * i]

      if ((cur >= left && right === undefined) || cur >= right) break

      if ((left >= cur && right === undefined) || left >= right) {
        ;[this.heap[i], this.heap[i * 2]] = [left, cur]
        i = i * 2
      } else if (right !== undefined && right >= left && right >= cur) {
        ;[this.heap[i], this.heap[i * 2 + 1]] = [right, cur]
        i = i * 2 + 1
      }
    }
  }

  //排序（升序）
  sort() {
    if (this.heap.length < 3) return

    for (let i = 1, len = this.heap.length; i < len; i++) {
      //第一个和倒数第i个数交换位置
      ;[this.heap[1], this.heap[len - i]] = [this.heap[len - i], this.heap[1]]

      //维持第i个数之前的所有数为一个大顶堆
      let f = 1
      while (2 * f <= len - 1 - i) {
        let cur = this.heap[f],
          left = this.heap[f * 2],
          right = this.heap[f * 2 + 1]

        if (
          cur >= left &&
          (right === undefined || 2 * f + 1 >= len - 1 - i || cur >= right)
        )
          break

        if (
          left > cur &&
          (right === undefined || 2 * f + 1 >= len - 1 - i || left > right)
        ) {
          ;[this.heap[f], this.heap[2 * f]] = [left, right]
          f = f * 2
        } else if (
          right !== undefined &&
          2 * f + 1 < len - 1 - i &&
          right > cur &&
          right > left
        ) {
          ;[this.heap[f], this.heap[2 * f + 1]] = [right, cur]
          f = f * 2 + 1
        }
      }
    }
  }
}

//  测试代码
// const test = new MaxHeap()
// test.insert(55)
// test.insert(30)
// test.insert(50)
// test.insert(44)
// test.insert(35)
// test.insert(5)
// test.insert(3)
// test.insert(10)
// test.sort()
