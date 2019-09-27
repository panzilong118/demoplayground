/*
  349. Intersection of Two Arrays 无重复的两个数组的交集
  https://leetcode.com/problems/intersection-of-two-arrays/description/
  Given two arrays, write a function to compute their intersection.

  Example 1:

  Input: nums1 = [1,2,2,1], nums2 = [2,2]
  Output: [2]
  Example 2:

  Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  Output: [9,4]
  Note:

  Each element in the result must be unique.
  The result can be in any order.
*/

/*
  思路：
  1. 先遍历第一个数组，将其存到hashtable中，
  2. 然后遍历第二个数组，如果在hashtable中存在就push到return，然后清空hashtable即可。
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const visited = {};
  const ret = [];
  for(let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    visited[num] = num;
  }
  for(let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    if (visited[num] !== undefined) {
      ret.push(num);
      visited[num] = undefined;
    }
  }
  return ret;
};

/*
  思路： O(n*3) very bad
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//   const visited = {};
//   const ret = [];
//   for(let i = 0; i < nums1.length; i++) {
//     const num = nums1[i];
//     if (nums2.includes(num)) {
//       if (!ret.includes(num)) {
//         ret.push(num);
//       }
//     }
//   }
//   return ret;
// };

var nums1 = [1,2,2,1],
nums2 = [2,2];

// var nums1 = [4,9,5],
// nums2 = [9,4,9,8,4];
//
// var nums1 = [2,1],
// nums2 = [1,2];

// var nums1 = [1,2,2,1],
// nums2 = [2];
const num = intersection(nums1, nums2);
console.log(num);
