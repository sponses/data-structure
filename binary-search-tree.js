class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  //插入节点
  insertNode(val) {
    const node = new TreeNode(val)
    if (this.root === null) {
      this.root = node
      return
    }

    //判断树中是否含有该值
    if (this.find(val) !== null) throw Error('有啦有啦，重新传一个吧')

    insert(this.root)
    function insert(root) {
      if (root.val > val) {
        if (root.left) {
          insert(root.left)
        } else {
          root.left = node
          return
        }
      } else {
        if (root.right) {
          insert(root.right)
        } else {
          root.right = node
          return
        }
      }
    }
  }

  //共有多少个节点
  getSize(root = this.root) {
    if (!root) return 0
    return 1 + this.getSize(root.left) + this.getSize(root.right)
  }

  //树的高度
  getHeight(root = this.root) {
    if (!root) return 0
    return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right))
  }

  //先序遍历(根节点->左子树->右子树)
  preOrderTraversal(root = this.root) {
    if (!root) return
    console.log(root.val)
    this.preOrderTraversal(root.left)
    this.preOrderTraversal(root.right)
  }

  //中序遍历(左子树->根节点->右子树)
  midOrderTraversal(root = this.root) {
    if (!root) return
    this.midOrderTraversal(root.left)
    console.log(root.val)
    this.midOrderTraversal(root.right)
  }

  //后序遍历(左子树->右子树->根节点)
  postOrderTraversal(root = this.root) {
    if (!root) return
    this.postOrderTraversal(root.left)
    this.postOrderTraversal(root.right)
    console.log(root.val)
  }

  //小小小
  getMin(root = this.root) {
    if (!root) return null
    if (root && !root.left) return root
    if (root && root.left) return this.getMin(root.left)
  }

  //大大大
  getMax(root = this.root) {
    if (!root) return null
    if (root && !root.right) return root
    if (root && root.right) return this.getMax(root.right)
  }

  //查找节点（参数：用户传入某个值）
  find(val, root = this.root) {
    if (!root) return null
    if (root.val === val) return root
    if (root.val > val) return this.find(val, root.left)
    if (root.val < val) return this.find(val, root.right)
  }

  //删除节点（参数：用户传入某个值）
  del(val, root = this.root) {
    if (this.find(val) === null) throw Error('没找到你传的值哦~')
    //删除节点好难哦~嘤嘤嘤
    //我来分析看看

    //判断当前节点是否是要删除的节点
    if (root.val === val) {
      //判断该节点有没有子节点
      if (!root.left && !root.right) root = null
      //有左子节点，无右子节点
      if (root.left && !root.right) root = root.left
      //有右子节点，无左子节点
      if (!root.left && root.right) root = root.right
      //左右子节点都有,把该节点替换为右节点，
      //找出右节点中最小的节点，最小节点的左节点为该替换掉的节点的左节点
      const left = root.left
      root.val = root.right.val
      root.right = root.right.right
      root.left = root.left.left
      this.getMin(root).left = left
      return
    }

    if (root.val > val) {
      this.del(val, root.left)
    } else {
      this.del(val, root.right)
    }
  }
}
