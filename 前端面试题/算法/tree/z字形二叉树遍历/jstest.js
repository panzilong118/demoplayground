/*
  Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

  For example:
  Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
  return its zigzag level order traversal as:
  [
  [3],
  [20,9],
  [15,7]
  ]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
/*
思路：
  这道题可以借助队列实现，首先把root入队，然后入队一个特殊元素Null(来表示每层的结束)。
  然后就是while(queue.length), 每次处理一个节点，都将其子节点（在这里是left和right）放到队列中。
  然后不断的出队， 如果出队的是null，则表式这一层已经结束了，我们就继续push一个null。
关键点解析：
  队列
  队列中用Null(一个特殊元素)来划分每层
  树的基本操作- 遍历 - 层次遍历（BFS）
*/
 var zigzagLevelOrder = function(root) {
   if (!root) return [];
   const items = [];
   let isOdd = true;
   let levelNodes = [];
   const queue = [root, null];
   while(queue.length > 0) {
       const t = queue.shift();
       if (t) {
           levelNodes.push(t.val)
           if (t.left) {
             queue.push(t.left)
           }
           if (t.right) {
             queue.push(t.right)
           }
       } else {
         if (!isOdd) { // 偶数层翻转
         // if (isOdd) { // 奇数层翻转
           levelNodes = levelNodes.reverse();
         }
         items.push(levelNodes)
         levelNodes = [];
         isOdd = !isOdd;
         if (queue.length > 0) {
             queue.push(null);
         }
       }
   }
   return items
 };

// var node = {
//   val: 3,
//   left: {
//     val: 9,
//     left: null,
//     right: null
//   },
//   right: {
//     val: 20,
//     left: {
//       val: 15,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 7,
//       left: null,
//       right: null
//     }
//   }
// }

var node = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: null
  }
}
const res = zigzagLevelOrder(node);
