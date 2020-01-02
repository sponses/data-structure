/**
 * 最大堆
 * 2020/1/2
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
    if (i === -1) return

    //使用最后一个元素替换当前元素
    //并删除最后一个元素
    this.heap[i] = this.heap[this.heap.length - 1]
    this.heap.pop()
    this.sortOne(i, this.heap.length)
  }

  sortOne(i, length) {
    //循环条件为该节点左子树存在，且不为已排好序的元素
    while (2 * i <= length) {
      let cur = this.heap[i],
        left = this.heap[i * 2],
        right = this.heap[i * 2 + 1]
      //当前节点大于左右子树，退出循环
      if (
        (cur > left && right !== undefined && cur > right) ||
        (cur > left && right === undefined)
      )
        return
      if (cur < left && (right === undefined || left > right)) {
        //当前节点左子树最大，与左子树交换位置
        ;[this.heap[i], this.heap[i * 2]] = [this.heap[i * 2], this.heap[i]]
        i = i * 2
      } else if (right !== undefined && cur < right && right > left) {
        //当前节点右子树最大，与右子树交换位置
        ;[this.heap[i], this.heap[i * 2 + 1]] = [
          this.heap[i * 2 + 1],
          this.heap[i]
        ]
        i = i * 2 + 1
      }
    }
  }

  //排序（升序）
  sort() {
    for (let i = 1, len = this.heap.length; i < len; i++) {
      ;[this.heap[1], this.heap[len - i]] = [this.heap[len - i], this.heap[1]]

      //不懂为啥要减2
      //我的思路是减1
      //但是试了要减2才行
      this.sortOne(1, this.heap.length - i - 2)

      /**
       * 好懵逼啊
       * 流下了没技术的眼泪
       * ༼ಢ_ಢ༽
       */
    }
  }
}
/**
 * 测试代码
 * const test = new MaxHeap()
 * test.insert(55)
 * test.insert(30)
 * test.insert(50)
 * test.insert(44)
 * test.insert(35)
 * test.insert(5)
 * test.insert(3)
 * test.insert(10)
 * test.sort() //[null, 3, 5, 10, 30, 35, 44, 50, 55]
 */
