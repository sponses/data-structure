/**
 * 实现的字典树结构如下：
 * this.root = {
 *  'h':{
 *    'e':{
 *      'l':{
 *         'o'
 *       }
 *    },
 *    'a':{
 *      'l':{
 *        'o'
 *      }
 *    }
 *  }
 * }
 */
class TrieNode {
  constructor() {}
}
class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  //插入单词
  insertWord(word, root = this.root) {
    if (!word.length) return

    let letter = word[0]
    if (!root.hasOwnProperty(letter)) root[letter] = new TrieNode()

    this.insertWord(word.slice(1), root[letter])
  }

  //查找单词
  search(word, root = this.root) {
    if (!word.length && !Object.keys(root).length) return true
    if (!word.length || !Object.keys(root).length) return false

    let letter = word[0]
    if (!root.hasOwnProperty(letter)) return false
    return this.search(word.slice(1), root[letter])
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

    //根据最后一个节点找出所有路径
    //过程中需要拼接字符串
    let result = []
    const findAll = (str, root) => {
      let keys = Object.keys(root)
      for (let i = 0, len = keys.length; i < len; i++) {
        if (!Object.keys(root[keys[i]]).length) {
          result.push(str + keys[i])
        } else {
          findAll(str + keys[i], root[keys[i]])
        }
      }
    }
    findAll(word, last)
    return result
    /**
     * 测试了一下木有问题
     * 好激动
     * 哭了
     * 这大概是我目前写过最复杂的逻辑了
     * (ಥ﹏ಥ)
     */
  }
}
/**
 * 我测试的代码
 * const test = new Trie()
 * test.insertWord('hello')
 * test.insertWord('halo')
 * test.insertWord('happy')
 * test.insertWord('health')
 * test.startWith('h') //["hello", "health", "halo", "happy"]
 * test.startWith('he') //["hello", "health"]
 * test.startWith('ha') //["halo", "happy"]
 */
