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
var levelOrder = function(root, depth = 0, number=[]) {
  // console.log(root,"<-----------root");
  if(root == null ){
    return number;
  }
  if(number[depth] == undefined){
    number[depth] = [];
  }
  number[depth].push(root.val);
  depth++;
  var left = levelOrder(root.left, depth, number);
  var right = levelOrder(root.right, depth, number);
  // console.log(number,"<-----------number");
  return number;
};

var root = {
  val: 3,
  right: {
     val: 20,
     right: {
       val:7,
       right:null,
       left:null
     },
     left: {
       val:15,
       right:null,
       left:null
     }
  },
  left: {
    val: 9,
    right: null,
    left: null
  }
}

levelOrder(root);
