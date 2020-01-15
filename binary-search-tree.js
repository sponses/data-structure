class TreeNode {
  /**
   * Initialize TreeNode, Set the value of the TreeNode to be val.
   * @param {number} val
   */
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  /**
   * Initialize  BinarySearchTree structure here.
   */
  constructor() {
    this.root = null
  }

  /**
   * Find an item from the tree. Return true if the operation is successful.
   * @param {number} val
   * @return {boolean}
   */
  find(val) {
    // 查找算法过程：
    // 若该树是空树，返回，否则：
    // 若node.val = root.val，则返回，否则：
    // 若node.val < root.val，则比较该左子树，否则：
    // 比较该右子树
    /**
     * @param {TreeNode} node
     * @return {boolean}
     */
    function find(node) {
      if (!node) return false
      if (node.val === val) return true
      if (node.val > val) return find(node.left)
      return find(node.right)
    }
    return find(this.root)
  }

  /**
   * Adds an item to the tree. Return true if the operation is successful.
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    // 插入算法过程：
    // 若该树是空树，则将所指结点作为根节点插入，否则：
    // 若node.val = root.val，则返回，否则：
    // 若node.val < root.val，则把该节点插入到左子树中，否则：
    // 把该节点插入到右子树中（新插入节点总是叶子节点）
    const newNode = new TreeNode(val)
    if (!this.root) {
      this.root = newNode
      return true
    }

    function insert(node) {
      if (node.val === val) return false
      if (node.val < val) {
        if (!node.right) {
          node.right = newNode
          return true
        }
        return insert(node.right)
      } else {
        if (!node.left) {
          node.left = newNode
          return true
        }
        return insert(node.left)
      }
    }
    return insert(this.root)
  }

  /**
   * Delete an item from the tree. Return true if the operation is successful.
   * @param {number} val
   * @return {boolean}
   */
  del(val) {
    // 删除算法过程：
    // root为空或者树中不存在该值，返回，否则
    // 要删除的节点为叶子节点，直接删除，否则：
    // 要删除的节点只有右节点，用右节点替换掉该节点，否则：
    // 要删除的节点只有左节点，用左节点替换掉该节点，否则：
    // 用该节点右节点替换掉该节点，并把该节点左节点连接在该节点右节点的左叶子节点上

    if (!this.root) return false

    if (this.root.val === val) {
      if (!this.root.left && !this.root.right) {
        this.root = null
      } else if (!this.root.left && this.root.right) {
        this.root = this.root.right
      } else if (this.root.left && !this.root.right) {
        this.root = this.root.left
      } else {
        let left = this.root.left
        this.root = this.root.right
        let root = this.root

        while (root.left) {
          root = root.left
        }
        root.left = left
      }
      return true
    }

    /**
     * 第一个参数为父节点，第二个参数为当前节点，第三个参数表明当前节点为左节点还是右节点
     * @param {TreeNode} root
     * @param {TreeNode}  node
     * @param {String}  direction
     * @return {boolean}
     */
    function del(root, node, direction) {
      if (!node) return false

      if (node.val === val) {
        if (!node.left && !node.right) {
          root[direction] = null
        } else if (!node.left && node.right) {
          root[direction] = node.right
        } else if (node.left && !node.right) {
          root[direction] = node.left
        } else {
          let left = node.left
          root[direction] = node.right

          let temp = root.right
          while (temp.left) {
            temp = temp.left
          }
          temp.left = left
        }
        return true
      }

      if (node.val > val) {
        return del(node, node.left, 'left')
      } else {
        return del(node, node.right, 'right')
      }
    }

    if (this.root.val > val) {
      return del(this.root, this.root.left, 'left')
    } else {
      return del(this.root, this.root.right, 'right')
    }
  }

  /**
   * Get the size of the tree
   * @return {number}
   */
  getSize() {
    /**
     * @param {TreeNode} node
     * @return {number}
     */
    function getSize(node) {
      if (!node) return 0
      return 1 + getSize(node.left) + getSize(node.right)
    }
    return getSize(this.root)
  }

  /**
   * Get the height of the tree
   * @return {number}
   */
  getHeight() {
    /**
     * @param {TreeNode} node
     * @return {number}
     */
    function getHeight(node) {
      if (!node) return 0
      return 1 + Math.max(getHeight(node.left), getHeight(node.right))
    }
    return getHeight(this.root)
  }

  /**
   * Pre order traversal
   */
  preOrderTraversal() {
    /**
     * @param {TreeNode} node
     */
    function preOrderTraversal(node) {
      if (!node) return
      console.log(node.val)
      preOrderTraversal(node.left)
      preOrderTraversal(node.right)
    }
    preOrderTraversal(this.root)
  }

  /**
   * Middle order traversal
   */
  midOrderTraversal() {
    /**
     * @param {TreeNode} node
     */
    function midOrderTraversal(node) {
      if (!node) return
      midOrderTraversal(node.left)
      console.log(node.val)
      midOrderTraversal(node.right)
    }
    midOrderTraversal(this.root)
  }

  /**
   * Post order traversal
   */
  postOrderTraversal() {
    /**
     * @param {TreeNode} node
     */
    function postOrderTraversal(node) {
      if (!node) return
      postOrderTraversal(node.left)
      postOrderTraversal(node.right)
      console.log(node.val)
    }
    postOrderTraversal(this.root)
  }

  /**
   * Get the smallest val on the tree
   * @return {Number}
   */
  getMin() {
    /**
     * @param {TreeNode} node
     */
    function getMin(node) {
      if (!node) return null
      if (!node.left) return node.val
      return this.getMin(node.left)
    }
    return getMin(this.root)
  }

  /**
   * Get the biggest val on the tree
   * @return {Number}
   */
  getMax() {
    /**
     * @param {TreeNode} node
     */
    function getMax(node) {
      if (!node) return null
      if (!node.right) return node.val
      return getMax(node.right)
    }
    return getMax(this.root)
  }
}
