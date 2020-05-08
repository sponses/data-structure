/**
 * 邻接矩阵存储图结构
 */
class Graph {
  constructor(vertex, edges) {
    this.vertex = new Array(vertex.length)
    for (let i = 0, len = vertex.length; i < len; i++) {
      this.vertex[i] = vertex[i]
    }
    this.edges = []
    for (let i = 0, len = vertex.length; i < len; i++) {
      this.edges[i] = []
      for (let j = 0, len2 = vertex.length; j < len2; j++) {
        this.edges[i][j] = i === j ? 0 : false
      }
    }
    for (let i = 0, len = edges.length; i < len; i++) {
      let y = this.vertex.indexOf(edges[i][0]),
        x = this.vertex.indexOf(edges[i][1]),
        w = edges[i][2] || 1
      this.edges[y][x] = w
    }
  }
}
// 测试代码
// let a = new Graph(
//   [1, 2, 3, 4],
//   [
//     [1, 2, 10],
//     [3, 4, 100],
//     [2, 3, -16]
//   ]
// )

/**
 * 邻接表存储图结构
 * 数组 + 链表
 */
class Vertex {
  constructor(val) {
    this.val = val
    this.firstEdge = null
  }
}
class Adjvex {
  constructor(val, weight) {
    this.val = val
    this.weight = weight
    this.next = null
  }
}
class Graph {
  constructor(vertex, edges) {
    let len = vertex.length
    this.vertex = new Array(len)
    for (let i = 0; i < len; i++) {
      this.vertex[i] = new Vertex(vertex[i])
    }
    for (let i = 0, len = edges.length; i < len; i++) {
      let v1 = vertex.indexOf(edges[i][0]),
        v2 = vertex.indexOf(edges[i][1]),
        w = edges[i][2]
      if (!this.vertex[v1].firstEdge) {
        this.vertex[v1].firstEdge = new Adjvex(v2, w)
      } else {
        let p = this.vertex[v1].firstEdge
        while (p.next) {
          if (p.val === v1) {
            p.weight = w
            break
          }
          p = p.next
        }
        if (p.val === v1) {
          p.weight = w
        } else {
          p.next = new Adjvex(v2, w)
        }
      }
    }
  }
}
let a = new Graph(
  [1, 2, 3, 4],
  [
    [1, 2, 10],
    [3, 4, 100],
    [2, 3, -16],
    [3, 1, 8]
  ]
)
console.log(a)
