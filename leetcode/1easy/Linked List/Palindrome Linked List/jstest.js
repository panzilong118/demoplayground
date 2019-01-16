/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var judge = false;
  var arr = [];
  var arrBack = [];
  //转成数组
  while(head){
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr,"<--------------arr");
  //如果数组长度为空或者是1，直接返回true
  if(arr.length == 0 || arr.length == 1){
    return true;
  }
  var middleFrontIndex = 0;
  var middleBackIndex = 0;
  //数组长度为双数,取中间数的左右为index记录点
  if(arr.length%2 == 0 ){
    middleFrontIndex = arr.length/2 - 1;
    middleBackIndex = arr.length/2;
  }else{
    //数组长度为单数,取以中间数分开的左右为index记录点
    middleFrontIndex = (arr.length-1)/2 - 1;
    middleBackIndex = (arr.length+1)/2;
  }

  //把后半段倒着取出来
  for(var i = arr.length -1; i>=middleBackIndex; i--){
    arrBack.push(arr[i]);
  }
  console.log(arrBack,"<--------------arrBack");

  //遍历前半段，判断结果
  for(var i = 0; i<= middleFrontIndex; i++){
    if(arr[i] != arrBack[i]){
      return judge;
    }else{

    }
    if(arr[i] == arrBack[i] && i == middleFrontIndex){
      judge =true;
      return judge;
    }
  }

  return judge;
};

// var head = {
//   val: 1,
//   next:{
//     val:2,
//     next:null
//   }
// };
//
// var head = {
//   val: 1,
//   next:{
//     val:2,
//     next:{
//       val:2,
//       next:{
//         val:1,
//         next:null
//       }
//     }
//   }
// };

// var head = {
//   val: 1,
//   next:null
// };

var head = {
  val: 1,
  next:{
    val:0,
    next:{
      val:1,
      next:null
    }
  }
};

isPalindrome(head);
