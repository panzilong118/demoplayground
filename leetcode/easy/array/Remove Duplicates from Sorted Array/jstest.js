
// var A = [1,2,2];
// var A = [0,0,1,1,1,2,2,3,3,4];
//
// for (i=0; i < A.length-1; i++){
//   var key = A[i];
//   var j = i+1;
//   while(key==A[j]){
//     A.splice(j,1)
//   }
// }
//
// console.log(A,"<----------A");

/**
 * @param {number[]} nums
 * @return {number}
 * 编程思路：从左到右循环数组，设置数组第一个位置为标杆，然后和第二个位置的值作比较
 * 如果相等，删除第二个位置上的值（数组整体左移），继续循环，直到标杆的值是唯一的。
 * 然后继续设置数组第二个位置为标杆，重复下去。最后的结果，数组的值是唯一的
 */
var removeDuplicates = function(nums) {
  if(nums){
    for (i=0; i < nums.length-1; i++){
      var key = nums[i];
      var j = i+1;
      while(key==nums[j]){
        nums.splice(j,1)
      }
    }
  }
};

var A = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(A);
console.log(A,"<----------A");
