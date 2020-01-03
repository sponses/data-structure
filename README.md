### 使用js实现数据结构

1.字典树（[代码](https://github.com/sponses/data-structure/blob/master/trie.js)）
```
  // 字典树结构
  {
    'a':{
      'p':{
        'p':{
          'l':{
            'y':{
              isEnd:true
            },
            'e':{
              isEnd:true
            }
            isEnd:false
          }
          isEnd:false
        }
        isEnd:false
      }
      isEnd:false
    }
  }

  // 实现功能：
  // 1.插入单词
  // 2.查找单词
  // 3.查找以输入字符串开始的所有单词
```

2.堆（[代码](https://github.com/sponses/data-structure/blob/master/heap.js)）

```
  // 小顶堆
  [null,1,5,8,7,9,10]

  // 大顶堆
  [null,7,5,4,3,2,1]

  // 实现功能：
  // 1.插入
  // 2.删除
  // 3.堆排序（升序、降序）
```