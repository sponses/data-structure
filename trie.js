class Trie {
  constructor(initArr) {
    this.trie = new Map()
    if (initArr && Array.isArray(initArr)) {
      for (let i = 0, len = initArr.length; i < len; i++) {
        this.insert(initArr[i])
      }
    }
  }

  insert(word) {
    let node = this.trie
    let i = 0
    while (i < word.length) {
      if (!node.has(word[i])) node.set(word[i], new Map())
      node = node.get(word[i])
      node.set('isEnd', ++i === word.length || node.get('isEnd'))
    }
  }

  search(word) {
    let node = this.trie
    let i = 0
    while (i < word.length) {
      if (!node.has(word[i])) return false
      node = node.get(word[i])
      if (++i === word.length && node.get('isEnd')) return true
    }
    return false
  }
}
