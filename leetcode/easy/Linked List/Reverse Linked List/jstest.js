/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var arr = [];
  var reverseHead = {};
  var before = {next:reverseHead};
  while(head){
    arr.push(head.val);
    head = head.next;
  };
  console.log(arr,"<-----------arr");
  var reverseArr = arr.reverse();
  console.log(reverseArr,"<-----------reverseArr");
  for(var i=0; i<=reverseArr.length-1; i++){
    reverseHead.val = reverseArr[i];
    // reverseHead.next = {
    //   val:reverseArr[i+1]?reverseArr[i+1]:null
    // }
    if(i == reverseArr.length -1){
      reverseHead.next = null;
    }else{
      reverseHead.next = {};
    }

    reverseHead = reverseHead.next;
  }

  console.log(reverseHead,"<-----------reverseHead");
  console.log(before,"<-----------before");
  //返回这个正确
  // return reverseArr;
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

reverseList(head);
