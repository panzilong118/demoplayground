/**
 * @param {number[]} nums
 * @return {number}
 */
 //todo 思路1.两个变量 previous - 上一次的最大值； beforePrevious - 上上一次的最大值
 // 2.取最大值： 当前值+beforePrevious， previous
 // 3.遍历数组的数据流动 previous -> tmp -> beforePrevious
var rob = function(nums) {
  let previous = 0;
  let beforePrevious = 0;

  for(let i = 0; i < nums.length; i++){
      let tmp = previous;
      previous = Math.max(nums[i] + beforePrevious, previous);
      beforePrevious = tmp;
  }

  return previous;
};

// var nums = [1,2,3,1];
var nums = [2,7,9,3,1];
var maxNum = rob(nums);
