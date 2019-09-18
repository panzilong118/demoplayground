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
 *
*/

var rotate = function(nums, k) {
    var numsStart = nums.slice(0,nums.length-k);
    console.log(numsStart,"<--------------numsStart");
    console.log(nums,"<--------------nums");
    var numsEnd = nums.splice(nums.length-k);
    console.log(numsEnd,"<--------------numsEnd");
    console.log(nums,"<--------------nums");
    // for(var i =numsEnd.length-1; i >= 0; i--){
    //   nums.unshift(numsEnd[i]);
    // }
    nums.unshift(...numsEnd);
    console.log(nums,"<--------------nums");
    // return nums;
};

var arr = [1,2,3,4,5,6,7],
// var A = [-1,-100,3,99],
    k = 2;
rotate(arr,k);
