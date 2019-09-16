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
var deleteNode = function(node) {
    console.log(node,"<------------node");
    //这块已经假设找到了给定的节点
    node.val = node.next.val;
    node.next = node.next.next;
    console.log(node,"<-----------node");
};

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

deleteNode(node);

//链表的基础知识
// function Node(element){
//     this.element = element;
//     this.next = null;
// }
//
// function LList(){
//     this.head = new Node('head');
//     this.find = find;
//     this.insert = insert;
//     this.deleteNode = deleteNode;
//     this.display = display;
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
// var cities = new LList();
// // cities.insert("Conway", "head");
// // cities.insert("Russellville", "Conway");
// // cities.insert("Alma", "Russellville");
// // cities.insert("Beijing", "Alma");
// // cities.display();
// //
// // cities.deleteNode("Russellville");
// // cities.display();
//
// cities.insert(4, "head");
// cities.insert(5, 4);
// cities.insert(1, 5);
// cities.insert(9, 1);
// cities.display();
//
// // cities.deleteNode(5);
// cities.deleteNode(1);
// cities.display();
