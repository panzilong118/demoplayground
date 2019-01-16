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
// var isValidBST = function(root) {
//     console.log(root,"<---------root");
//     var judge = true;
//     return visit(root,judge)
// };
//
// var visit = function(root,judge){
//   console.log(root + " ");
//   if (!(root == null)){
//       var left = visit(root.left,judge);
//       var right = visit(root.right,judge);
//       if(root.left){
//         if(root.val <= root.left.val ){
//           judge = false;
//           return judge;
//         }else{
//
//         }
//       }
//       if(root.right){
//         if(root.val >= root.right.val ){
//           judge = false;
//           return judge;
//         }else{
//
//         }
//       }
//
//    }
//    return judge;
// }

var isValidBST = function(root, lowerBound=-Infinity, upperBound=Infinity) {
  console.log(root,"<---------root");
  if (root === null) {
    return true;
  } else if (root.val <= lowerBound || root.val >= upperBound) {
    return false;
  } else {
    var left = isValidBST(root.left, lowerBound, root.val);
    var right = isValidBST(root.right, root.val, upperBound);
    return left && right;
  }
};

var root = {
  val: 10,
  right: {
     val: 15,
     right: {
       val:20,
       right:null,
       left:null
     },
     left: {
       val:6,
       right:null,
       left:null
     }
  },
  left: {
    val: 5,
    right: null,
    left: null
  }
}

isValidBST(root);
