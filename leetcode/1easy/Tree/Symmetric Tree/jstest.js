/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  console.log(root,"<-----------root");
  if(root == null) {
      return true;
  }
  const dfs = (node1, node2) =>{
      if(node1 == null && node2 == null) {
          return true;
      }
      if(node1 == null || node2 == null) {
          return false;
      }
      if(node1.val !== node2.val) {
          return false;
      }
      const l = dfs(node1.left, node2.right);
      const r = dfs( node1.right, node2.left);
      return l&&r;
  }
  return dfs(root.left, root.right);
};

var root = {
  val: 1,
  right: {
     val: 2,
     right: {
       val:3,
       right:null,
       left:null
     },
     left: {
       val:4,
       right:null,
       left:null
     }
  },
  left: {
    val: 2,
    right: {
      val:4,
      right:null,
      left:null
    },
    left: {
      val:3,
      right:null,
      left:null
    }
  }
}

// var root = {
//   val: 1,
//   right: {
//      val: 2,
//      right: {
//        val:3,
//        right:null,
//        left:null
//      },
//      left: null
//   },
//   left: {
//     val: 2,
//     right: {
//       val:3,
//       right:null,
//       left:null
//     },
//     left: null
//   }
// }

isSymmetric(root);
