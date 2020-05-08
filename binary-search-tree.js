class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(val) {
    const temp = new TreeNode(val)
    if (!this.root) {
      this.root = temp
    } else {
      let node = this.root
      while (true) {
        if (node.val > val) {
          if (!node.left) {
            node.left = temp
            return true
          }
          node = node.left
        } else if (node.val < val) {
          if (!node.right) {
            node.right = temp
            return true
          }
          node = node.right
        } else {
          throw Error('该节点已存在！')
        }
      }
    }
  }

  search(val) {
    let node = this.root
    while (node) {
      if (node.val > val) {
        node = node.left
      } else if (node.val < val) {
        node = node.right
      } else {
        return true
      }
    }
    return false
  }

  getHeight() {
    if (!this.root) return 0
    const queue = [this.root]
    let ans = 0
    while (queue.length) {
      ans++
      let cnt = queue.length
      while (cnt--) {
        const temp = queue.shift()
        if (temp.left) queue.push(temp.left)
        if (temp.right) queue.push(temp.right)
      }
    }
    return ans
  }
}
