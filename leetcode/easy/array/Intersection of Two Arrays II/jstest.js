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

var intersect = function(nums1, nums2) {
  //交集数组
  var number = [];
  //正向遍历第一个数组
  for(var i=0; i<=nums1.length-1; i++){
    //如果第二个数组中包含第一个数组中的元素
    if(nums2.includes(nums1[i])){
      //把第一个数组的元素加入到交集数组中
      number.push(nums1[i]);
      //在第二个数组中剔除交集数组元素
      nums2.splice(nums2.indexOf(nums1[i]),1);
    }
  }

  console.log(number,"<----------------number");
  return number;
};

// var nums1 = [1,2,2,1],
// nums2 = [2,2];

// var nums1 = [4,9,5],
// nums2 = [9,4,9,8,4];
//
// var nums1 = [2,1],
// nums2 = [1,2];

var nums1 = [1,2,2,1],
nums2 = [2];

intersect(nums1,nums2);
