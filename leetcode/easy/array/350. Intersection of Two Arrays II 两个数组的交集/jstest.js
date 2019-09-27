/*
  350. Intersection of Two Arrays II 两个数组的交集
  Given two arrays, write a function to compute their intersection.

  Example 1:

  Input: nums1 = [1,2,2,1], nums2 = [2,2]
  Output: [2,2]
  Example 2:

  Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  Output: [4,9]
  Note:

  Each element in the result should appear as many times as it shows in both arrays.
  The result can be in any order.
  Follow up:

  What if the given array is already sorted? How would you optimize your algorithm?
  What if nums1's size is small compared to nums2's size? Which algorithm is better?
  What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 //错误的算法，再许多数组的时候会失败
// var intersect = function(nums1, nums2) {
//   var number = [];
//   for(var i=0; i<=nums1.length-1; i++){
//     for(var j=0; j<=nums2.length-1; j++){
//       if(nums1[i] ==nums2[j] && number.length < nums2.length ){
//         number.push(nums1[i]);
//         j = nums2.length;
//       }
//     }
//   }
//
//   console.log(number,"<----------------number");
//   return number;
// };
//
// // var nums1 = [1,2,2,1],
// // nums2 = [2,2];
//
// // var nums1 = [4,9,5],
// // nums2 = [9,4,9,8,4];
//
// // var nums1 = [2,1],
// // nums2 = [1,2];
//
// var nums1 = [1,2,2,1],
// nums2 = [2];
//
// intersect(nums1,nums2);

/*
  思路：
  先遍历第一个数组, 如果第二个数组中包含当前值，push当前值到return，并在第二个数组中剔除当前元素（交集数组元素）
*/

var intersect = function(nums1, nums2) {
  // 交集数组
  const ret = [];
  // 正向遍历第一个数组
  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i];
    // 如果第二个数组中包含第一个数组中的元素
    if(nums2.includes(num)) {
      // 把第一个数组的元素加入到交集数组中
      ret.push(num);
      // 在第二个数组中剔除交集数组元素
      nums2.splice(nums2.indexOf(num), 1);
    }
  }
  return ret;
};

/*
  思路：
  1. 先遍历第一个数组，将其存到hashtable中，并计算元素出现个数
  {
    1: 2,
    2: 2
  }
  2.然后遍历第二个数组，如果在hashtable中存在, 并且元素计数大于0 （value>0）, 就push到return，并减去1。
  {
    1: 2,
    2: 0
  }
*/
// var intersect = function(nums1, nums2) {
//   // 交集数组
//   const ret = [];
//   const hashTable = {};
//   // 遍历第一个数组
//   for (let i = 0; i < nums1.length; i++) {
//     let num = nums1[i];
//     if (hashTable[num]) {
//       hashTable[num]++;
//     } else {
//       hashTable[num] = 1;
//     }
//   }
//   // 遍历第二个数组
//   for (let i = 0; i < nums2.length; i++) {
//     let num = nums2[i];
//     if (hashTable[num] > 0) {
//       ret.push(num);
//       hashTable[num]--;
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
const num = intersect(nums1, nums2);
console.log(num);
