/*
  283. Move Zeroes 把元素0移动到数组的最后
  Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  Example:

  Input: [0,1,0,3,12]
  Output: [1,3,12,0,0]
  Note:

  You must do this in-place without making a copy of the array. （也就是不需要借助额外的存储空间）
  Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 1.设置数字0计数器
 * 2.正向遍历数组
 * 3.如果当前元素等于0，直接从数组中剔除元素
 * 4.为了继续遍历数组，需要把游标减1 - i--
 * 5.数字0计数器加1 - countZeroes++
 * 6.正向遍历数字0计数器，在数组的最后添加0
 */
var moveZeroes = function(nums) {
  let countZeroes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i--;
      countZeroes++;
    }
  }
  for(let i = 0; i < countZeroes; i++) {
    nums.push(0);
  }
};

var arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
