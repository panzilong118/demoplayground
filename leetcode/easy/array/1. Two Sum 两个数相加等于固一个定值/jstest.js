/*
  1. Two Sum 两个数相加等于固一个定值
  https://leetcode.com/problems/two-sum/
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:

  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 /*
  * 双重循环，暴力模拟
 */
// var twoSum = function(nums, target) {
//     const number = [];
//     //双重循环 顺序遍历
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if ((nums[i] + nums[j]) === target) {
//           number.push(i, j);
//         }
//       }
//     }
//     return number;
// };
//
// var nums = [2, 7, 11, 15],
//     target = 9;
// const res = twoSum(nums, target);
// console.log(res);

/*
 * 思路：利用hashtable，减少了一次循环。
 * 目标数字 - 当前循环数字 = 要找的那个数字
 * 如果这个数字已经存在在hash表中，直接出结果；否则把这个数字存放在hash表中
*/

var twoSum = function(nums, target) {
  var hashTable = {},
      result = [],
      findthisnum = 0;
  for (let i = 0; i < nums.length; i++) {
    findthisnum = target - nums[i];
    if (typeof hashTable[findthisnum] !== 'undefined') {
       result.push(hashTable[findthisnum], i);
    } else {
      hashTable[nums[i]] = i;
    }
  }
  return result;
};

var nums = [2, 7, 11, 15],
    target = 9;
const res = twoSum(nums,target);
console.log(res);
