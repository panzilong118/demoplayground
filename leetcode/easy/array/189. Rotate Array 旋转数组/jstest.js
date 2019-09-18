/*
	189. Rotate Array
	https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

	Given an array, rotate the array to the right by k steps, where k is non-negative.

	Example 1:

	Input: [1,2,3,4,5,6,7] and k = 3
	Output: [5,6,7,1,2,3,4]
	Explanation:
	rotate 1 steps to the right: [7,1,2,3,4,5,6]
	rotate 2 steps to the right: [6,7,1,2,3,4,5]
	rotate 3 steps to the right: [5,6,7,1,2,3,4]
	Example 2:

	Input: [-1,-100,3,99] and k = 2
	Output: [3,99,-1,-100]
	Explanation:
	rotate 1 steps to the right: [99,-1,-100,3]
	rotate 2 steps to the right: [3,99,-1,-100]
	Note:

	Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
	Could you do it in-place with O(1) extra space?
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 //Do not return anything, modify nums in-place instead.
 //答案不接受，nums的赋值操作估计有些问题
// var rotate = function(nums, k) {
//     // var ret = [];
//     var numsStart = nums.slice(0,nums.length-k);
//     console.log(numsStart,"<--------------numsStart");
//     console.log(nums,"<--------------nums");
//     var numsEnd = nums.splice(nums.length-k);
//     console.log(numsEnd,"<--------------numsEnd");
//     console.log(nums,"<--------------nums");
//     // ret = numsEnd.concat(numsStart);
//     nums = numsEnd.concat(nums);
//     // console.log(ret,"<--------------ret");
//     console.log(nums,"<--------------nums");
//     return nums;
// };
//
// var A = [1,2,3,4,5,6,7],
// // var A = [-1,-100,3,99],
//     k = 3;
// rotate(A,k);

/*
 * 编程思路：截取新数组
*/

// var rotate = function(nums, k) {
//     var numsStart = nums.slice(0, nums.length - k);
//     var numsEnd = nums.splice(nums.length - k);
//     // for(var i =numsEnd.length-1; i >= 0; i--){
//     //   nums.unshift(numsEnd[i]);
//     // }
//     nums.unshift(...numsEnd);
// };


// 思路： 一边弹，一边压
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for(var i=0;i<k;i++){
        var dd=nums.pop();
        nums.unshift(dd);
    }
		console.log(nums);
};

var arr = [1,2,3,4,5,6,7],
// var A = [-1,-100,3,99],
    k = 2;
rotate(arr,k);
