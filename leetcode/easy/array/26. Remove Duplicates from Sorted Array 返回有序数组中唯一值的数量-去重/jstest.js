/*
  26. Remove Duplicates from Sorted Array 返回有序数组中唯一值的数量-去重
  https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
  https://github.com/azl397985856/leetcode/blob/master/problems/26.remove-duplicates-from-sorted-array.md

  Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

  Example 1:

  Given nums = [1,1,2],

  Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

  It doesn't matter what you leave beyond the returned length.
  Example 2:

  Given nums = [0,0,1,1,1,2,2,3,3,4],

  Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

  It doesn't matter what values are set beyond the returned length.
  Clarification:

  Confused why the returned value is an integer but your answer is an array?

  Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

  Internally you can think of this:

  // nums is passed in by reference. (i.e., without making a copy)
  int len = removeDuplicates(nums);

  // any modification to nums in your function would be known by the caller.
  // using the length returned by your function, it prints the first len elements.
  for (int i = 0; i < len; i++) {
      print(nums[i]);
  }
*/

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
// var removeDuplicates = function(nums) {
//   for (var i = 0; i < nums.length - 1; i++) {
//     var key = nums[i];
//     var j = i + 1;
//     while (key === nums[j]) {
//       nums.splice(j, 1)
//     }
//   }
//   return nums.length;
// };

/*
思路
  使用快慢指针来记录遍历的坐标。
  开始时这两个指针都指向第一个数字
  如果两个指针指的数字相同，则快指针向前走一步
  如果不同，则两个指针都向前走一步
  当快指针走完整个数组后，慢指针当前的坐标加1就是数组中不同数字的个数

关键点解析
  双指针
  这道题如果不要求，O(n)的时间复杂度， O(1)的空间复杂度的话，会很简单。 但是这道题是要求的，这种题的思路一般都是采用双指针
  如果是数据是无序的，就不可以用这种方式了，从这里也可以看出排序在算法中的基础性和重要性。
*/

var removeDuplicates = function(nums) {
    const size = nums.length;
    let slowP = 0;
    for (let fastP = 0; fastP < size; fastP++) {
        if (nums[fastP] !== nums[slowP]) {
            slowP++;
            nums[slowP] = nums[fastP]
        }
    }
    return slowP + 1;
};

// var arr = [1,1,2];
var arr = [0,0,1,1,1,2,2,3,3,4];
const res = removeDuplicates(arr);
console.log(res, "<----------res");
