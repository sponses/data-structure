/**
 * 实现字典树结构为:
 *root = {
 * a: {
 *   p: {
 *     p: {
 *       l: {
 *         e: {
 *           isEnd: true
 *         },
 *         y: {
 *           isEnd: true
 *         }
 *       },
 *       isEnd: false
 *     },
 *     isEnd: false
 *   },
 *   isEnd: false
 * }
 *}
 */
class Trie {
  constructor() {
    this.root = {}
  }

  //插入单词
  insert(word) {
    function insert(word, node) {
      if (!word.length) return

      let letter = word[0]
      if (!node.hasOwnProperty(letter))
        node[letter] = { isEnd: word.length === 1 }
      if (word.length === 1) node[letter].isEnd = true
      insert(word.slice(1), node[letter])
    }
    insert(word, this.root)
  }

  //查找单词
  search(word) {
    if (!word.length) return false
    function search(word, node) {
      let letter = word[0]
      if (!node.hasOwnProperty(letter)) return false
      if (word.length === 1) return node[letter].isEnd
      return search(word.slice(1), node[letter])
    }
    return search(word, this.root)
  }

  //查找以输入字符串开始的所有单词
  startWith(word) {
    //找出输入单词的最后一个字母的节点
    const findLastOne = (word, root = this.root) => {
      if (!word.length) return null

      let letter = word[0]
      if (!root.hasOwnProperty(letter)) return null
      if (word.length === 1) return root[letter]
      return findLastOne(word.slice(1), root[letter])
    }
    let last = findLastOne(word)

    let result = []

    //判断该单词最后一个字母节点是否为空或者是否满足条件
    if (!last) return result

    //根据最后一个节点找出所有路径
    //过程中需要拼接字符串
    const findAll = (str, root) => {
      let keys = Object.keys(root)
      for (let i = 0, len = keys.length - 1; i < len; i++) {
        //判断当前字母是否是最后一个单词或者isEnd属性是否为真
        //如果条件为真，说明到这个字母为止组成的是一个单词
        if (Object.keys(root[keys[i]]).length === 1 || root[keys[i]].isEnd) {
          result.push(str + keys[i])
        }

        //判断当前字母后面是否还有单词
        //如果有就递归
        if (Object.keys(root[keys[i]]).length > 1) {
          findAll(str + keys[i], root[keys[i]])
        }
      }
    }
    findAll(word, last)
    return result
  }
}
/**
 * 测试的代码
 * const test = new Trie()
 * test.insertWord('hello')
 * test.insertWord('halo')
 * test.insertWord('happy')
 * test.insertWord('health')
 * test.startWith('h') //["hello", "health", "halo", "happy"]
 * test.startWith('he') //["hello", "health"]
 * test.startWith('ha') //["halo", "happy"]
 */
