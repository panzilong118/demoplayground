// 节点对象
function Node(data, left, right) {
   this.data = data;  // 节点值
   this.left = left;  // 当前节点的左子节点
   this.right = right;  // 当前节点的右子节点
   this.show = show;  // 辅助function
}

function show() {
   return this.data;
}

function BST() {
   this.root = null;  // 根节点
   this.insert = insert;
   this.preOrder = preOrder;
}

function insert(data) {
   var n = new Node(data, null, null);
   if (this.root == null) {
      this.root = n;
   }
   else {
      var current = this.root;
      // start change
      while (true) {
         if (data < current.data) {
            if (current.left == null) {
               current.left = n;
               break;
            }else{
               current = current.left;
            }
         }else {
            if (current.right == null) {
               current.right = n;
               break;
            }else{
               current = current.right;
            }
         }
      }
   }
   console.log(this.root,"<-----------this.root");
}

function preOrder(node) {
   if (!(node == null)) {
      console.log(node.show() + " ");
      preOrder(node.left);
      preOrder(node.right);
   }
}

var bst = new BST();
var nums = [10, 3, 18, 2, 4, 13, 21, 9, 8, 9];
for(var i = 0; i < nums.length; i++) {
    bst.insert(nums[i]);
}
bst.preOrder(bst.root);
