/*
	217. Contains Duplicate 判断数组中是否包含重复值
	https://leetcode.com/problems/contains-duplicate/

	Given an array of integers, find if the array contains any duplicates.

	Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

	Example 1:

	Input: [1,2,3,1]
	Output: true
	Example 2:

	Input: [1,2,3,4]
	Output: false
	Example 3:

	Input: [1,1,1,3,3,4,3,2,4,2]
	Output: true
*/

/*
	思路：
		暴力模拟
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     for(var i = 0; i < nums.length; i++) {
//       for(var j = i + 1; j < nums.length; j++) {
//         if(nums[i] === nums[j]) {
//           return true;
//         }
//       }
//     }
//     return false;
// };

/*
	思路：
		建立一个空对象，遍历数组，如果对象不存在这个值，则把数组里的值放到对象里，并记录存在（true）
		如果之后的数组值，仍然存在在对象里，则说明这个数组包含重复值，可以直接返回结果。
		如果不存在，一次遍历完成后就可以得出结果
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashTab = {};
    for (var i = 0; i < nums.length; i++) {
        if (!hashTab[nums[i]]) {
						// 并记录存在（true）
            hashTab[nums[i]] = true;
        } else {
            return true;
        }
    }
    return false;
};

// var arr = [1,1,1,3,3,4,3,2,4,2];
var arr = [1, 2, 3, 4];
const judge = containsDuplicate(arr);
console.log(judge, '<---judge');
