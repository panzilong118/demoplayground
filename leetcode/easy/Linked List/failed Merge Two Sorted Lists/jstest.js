/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var mergedList = {};
  var before = {next:mergedList};
  var megerdArr = [];

  //l1 & l2 are object
  // console.log(typeof l1,"<---------l1");
  // console.log(typeof l2,"<---------l2");

  if(l1 && l1.val == undefined) {
    if(l2 && l2.val == undefined){
      return megerdArr;
    }else{
      while(l2){
        megerdArr.push(l2.val);
        l2 = l2.next;
      }
      return megerdArr;
    }
  }else{
    if(l2 && l2.val == undefined){
      while(l1){
        megerdArr.push(l1.val);
        l1 = l1.next;
      }
      return megerdArr;
    }
  }
  while(l1){
    while(l2){
      if(l1 && l1.val <= l2.val){
        mergedList.val = l1.val;
        mergedList.next = {};
        mergedList = mergedList.next
        l1 = l1.next;
      }else{
        mergedList.val = l2.val;
        if(l1 || !(l2.next == null) ){
          mergedList.next = {};
        }else{
          mergedList.next = null;
        }
        mergedList = mergedList.next;
        l2 = l2.next;
      }
    }

    if(l1){
      mergedList.val = l1.val;
      if( !(l1.next == null) ){
        mergedList.next = {};
      }else{
        mergedList.next = null;
      }
      mergedList = mergedList.next
      l1 = l1.next;
    }
  }

  console.log(before,"<----------before");
  while(before.next){
    if(before.next.val){
      megerdArr.push(before.next.val);
    }
    before.next = before.next.next;
  }
  console.log(megerdArr,"<----------megerdArr");
  return megerdArr;
};

// var l1 = {
//   val: 1,
//   next:{
//     val:2,
//     next:{
//       val:4,
//       next:null
//     }
//   }
// };
//
// var l2 = {
//   val: 1,
//   next:{
//     val:3,
//     next:{
//       val:4,
//       next:null
//     }
//   }
// };

// var l1 = {};
// var l2 = {};

// var l1 = [];
// var l2 = [];

var l1 = {};
var l2 = {
  val:0,
  next:null
};

mergeTwoLists(l1,l2);
