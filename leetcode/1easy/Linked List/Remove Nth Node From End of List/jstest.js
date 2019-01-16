/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// var deleteNode = function(node) {
//     console.log(node,"<------------node");
//     //这块已经假设找到了给定的节点
//     //是先把当前节点的值用下一个节点的值覆盖了，然后我们删除下一个节点即可
//     node.val = node.next.val;
//     node.next = node.next.next;
//     console.log(node,"<-----------node");
// };

// var node = {
//   val: 4,
//   next:{
//     val:5,
//     next:{
//       val:1,
//       next:{
//         val:9,
//         next:null
//       }
//     }
//   }
// };

// deleteNode(node);

//链表的基础知识
// function Node(element){
//     this.element = element;
//     this.next = null;
// }
//
// function LList(){
//     this.head = new Node('head');
//     this.find = find;
//     this.findPosition = findPosition;
//     this.findVal = findVal;
//     this.insert = insert;
//     this.deleteNode = deleteNode;
//     this.display = display;
//     this.removeNthFromEnd = removeNthFromEnd;
// }
//
// function find(item){
//     var currNode = this.head;
//     while (currNode.element != item){
//         currNode = currNode.next;
//     }
//     return currNode;
// }
//
// function insert(newElement, item){
//     var newNode = new Node(newElement);
//     var current = this.find(item);
//     newNode.next = current.next;
//     current.next = newNode;
// }
//
// function display(){
//     var currNode = this.head;
//     while (!(currNode.next == null)){
//         console.log(currNode.next.element + '->');
//         currNode = currNode.next;
//     }
// }
//
// function deleteNode(node) {
//     //是先把当前节点的值用下一个节点的值覆盖了，然后我们删除下一个节点即可
//     console.log(node,"<------------node");
//     var current = this.find(node);
//     console.log(current,"<------------current");
//     current.element = current.next.element;
//     current.next = current.next.next;
//     console.log(current,"<------------current");
// };
//
// function findPosition(n){
//   var currNode = this.head;
//   var depth = 0;
//   while (!(currNode.next == null)){
//       currNode = currNode.next;
//       depth++;
//   }
//   return depth-n;
// }
//
// function findVal(position){
//     var currNode = this.head;
//     for(var i=0; i<=position; i++){
//       currNode = currNode.next;
//     }
//     return currNode.element;
// }
//
// function removeNthFromEnd(n){
//   //找到实际位置
//   var position = this.findPosition(n);
//   //找到值
//   var item = this.findVal(position);
//   //删除节点
//   this.deleteNode(item);
// }
//
// var cities = new LList();
// // cities.insert("Conway", "head");
// // cities.insert("Russellville", "Conway");
// // cities.insert("Alma", "Russellville");
// // cities.insert("Beijing", "Alma");
// // cities.display();
// //
// // cities.deleteNode("Russellville");
// // cities.display();
// //
// // cities.insert(4, "head");
// // cities.insert(5, 4);
// // cities.insert(1, 5);
// // cities.insert(9, 1);
// cities.insert(1, "head");
// cities.insert(2, 1);
// cities.insert(3, 2);
// cities.insert(4, 3);
// cities.insert(5, 4);
// cities.display();
//
// // cities.deleteNode(5);
// // cities.deleteNode(1);
// cities.removeNthFromEnd(4);
// cities.display();


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//   console.log(head,"<-------------head");
//   var left,
//       right = head;
//   left = {next:head};
//   var depth = 1;
//   while(!(head.next == null)){
//     head.next = head.next.next;
//     depth++;
//   }
//   console.log(head,"<-------------head");
//   console.log(depth,"<-------------depth");
//   for(var i=0; i<= depth-n-1; i++){
//     head.next = head.next.next;
//   }
//   console.log(head,"<-------------head");
// };

var removeNthFromEnd = function(head, n) {
  console.log(head,"<--------------head");
  var left = {},
      before ={},
      right = head;
  left = before = {next: head};
  //右移n次
  while (n--){
    right = right.next;
  }

  //n + 右移n次后到最后指向null的次数 = 链表长度
  //右移n次后到最后指向null的次数 = 链表长度 - n
  //右移n次后到最后指向null的次数 = 从左边移动的次数
  while (right) {
    right = right.next;
    left = left.next;
  }
  //改变指针即可删除节点
  left.next = left.next.next;
  //返回删除节点后的before
  console.log(before.next,"<--------------before.next");
  return before.next;
};

//1->2->3->4->5
var head = {
  val: 1,
  next:{
    val:2,
    next:{
      val:3,
      next:{
        val:4,
        next:{
          val:5,
          next:null
        }
      }
    }
  }
};

var n = 2;
removeNthFromEnd(head,n);
