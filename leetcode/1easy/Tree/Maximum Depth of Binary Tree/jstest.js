// 节点对象
// function Node(data, left, right) {
//    this.data = data;  // 节点值
//    this.left = left;  // 当前节点的左子节点
//    this.right = right;  // 当前节点的右子节点
//    this.show = show;  // 辅助function
// }
//
// function show() {
//    return this.data;
// }
//
// function BST() {
//    this.root = null;  // 根节点
//    this.insert = insert;
//    this.preOrder = preOrder;
//    this.inOrder = inOrder;
//    this.postOrder = postOrder;
// }
//
// function insert(data) {
//    var n = new Node(data, null, null);
//    if (this.root == null) {
//       this.root = n;
//    }
//    else {
//       var current = this.root;
//       // start change
//       while (true) {
//          if (data < current.data) {
//             if (current.left == null) {
//                current.left = n;
//                break;
//             }else{
//                current = current.left;
//             }
//          }else {
//             if (current.right == null) {
//                current.right = n;
//                break;
//             }else{
//                current = current.right;
//             }
//          }
//       }
//    }
//    console.log(this.root,"<-----------this.root");
// }
//
// function preOrder(node) {
//    if (!(node == null)) {
//       console.log(node.show() + " ");
//       preOrder(node.left);
//       preOrder(node.right);
//    }
// }
//
// var bst = new BST();
// var nums = [10, 3, 18, 2, 4, 13, 21, 9, 8, 9];
// for(var i = 0; i < nums.length; i++) {
//     bst.insert(nums[i]);
// }
// // bst.preOrder(bst.root);
//
// function inOrder(node) {
//    if (!(node == null)) {
//       inOrder(node.left);
//       console.log(node.show() + " ");
//       inOrder(node.right);
//    }
// }
// // bst.inOrder(bst.root);
//
// function postOrder(node) {
//    if (!(node == null)) {
//       postOrder(node.left);
//       postOrder(node.right);
//       console.log(node.show() + " ");
//    }
// }
// bst.postOrder(bst.root);


// function preOrder(node) {
//    if (!(node == null)) {
//       console.log(node.val + " ");
//       preOrder(node.left);
//       preOrder(node.right);
//    }
// }
//
//
// preOrder(root);

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var depth = 0;
var maxDepth = function(root) {
    depth=0;
    return visit(root, depth);
};

var visit = function(node, depth) {
    if(node == null) {
        return depth;
    }
    depth++;
    console.log(node.val,"<-------------node");
    var left = visit(node.left,depth);
    var right = visit(node.right, depth);
    return (Math.max(left, right));
}

var root = {
  val: 3,
  right: {
     val: 20,
     right: {
       val: 7,
       right: null,
       left: null },
     left: {
       val: 15,
       right: null,
       left: {
          val:14,
          right:null,
          left:null
       }
     }
  },
  left: {
    val: 9,
    right: null,
    left: null
  }
}

maxDepth(root);
