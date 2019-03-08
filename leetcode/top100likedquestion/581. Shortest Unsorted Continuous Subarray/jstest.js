/**
 * @param {number[]} nums
 * @return {number}
 */
 //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 //思路1.数组复制
 // 2.复制的数组排序
 // 3.初始化两个变量，开始设为最长的，结束设为最短的
 // 4.遍历数组，如果与复制的数组不同，开始取最小值，结束取最大值
 // 5.相减返回长度
 var findUnsortedSubarray = function(nums) {
     let sortNums = nums.slice()
     sortNums.sort((a,b) => (a - b))
     let start = nums.length - 1, end = 0
     for(let i = 0; i < nums.length; i++) {
         if(nums[i] != sortNums[i]){
             start = Math.min(start, i)
             end = Math.max(end, i)
         }
     }
     if(end <= start) return 0
     return end - start + 1
 };

var nums = [2, 6, 4, 8, 10, 9, 15];
var theLength = findUnsortedSubarray(nums);

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);
