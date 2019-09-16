/**
 * @param {number[]} digits
 * @return {number[]}
 */
 //错误的算法 var nums = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]; parseInt() 超过16位,最高精度16位
// var plusOne = function(digits) {
//   var num = "";
//   var number = [];
//   //数组转换为字符串相加
//   for(var i=0; i<=digits.length-1; i++){
//     num += digits[i].toString();
//   }
//   //字符串再转换为数字+1
//   num = parseFloat(num)+1;
//   //数字再转换为数组
//   number = Array.from(num.toString());
//   console.log(num,"<---------------num");
//   console.log(number,"<---------------number");
//   //把数组元素的类型从字符串转换为数字
//   for(var i=0; i<= number.length-1; i++){
//     number[i] = parseInt(number[i]);
//   }
//   return number;
// };
//
// var nums = [1,2,3];
// // var nums = [4,3,2,1];
// // var nums = [9];
// // var nums = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
//
// plusOne(nums);

//错误的算法 [9]=>[10] ([1,0])
// var plusOne = function(digits) {
//
//   var num = "";
//
//   for(var i=digits.length-1; i>=0; i--){
//     num += digits[i].toString();
//   }
//
//   console.log(num,"<---------------num");
//   console.log(digits,"<---------------digits");
//   return digits;
// };
//
// var nums = [1,2,3];
// // var nums = [4,3,2,1];
// // var nums = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
// // var nums = [5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9];
// // var nums = [9];
//
// plusOne(nums);

/**
 * 1.反向遍历数组
 * 2.如果当前遍历元素+1后大于9 （10），设置最后一位为0，然后再遍历下一个元素（更高一位）
 * 3.否则直接输出数组，因为第二步判断的时候已经在最后一位加了1
 * 4.如果这个遍历完成，则说明最后一位（最高位）大于9，在数组的最前面加入元素1
 */

var plusOne = function(digits) {
  for(var i = digits.length - 1; i >= 0; i--){
    if(++digits[i] > 9){
      digits[i] = 0;
    }
    else{
      console.log(digits,"<-------------digits");
      return digits;
    }
  }
  digits.unshift(1);
  console.log(digits,"<-------------digits");
  return digits;
};

// var nums = [1,2,3];
// var nums = [4,3,2,1];
// var nums = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
var nums = [5,2,2,6,5,7,1,9,0,3,8,6,8,6,5,2,1,8,7,9,8,3,8,4,7,2,5,8,9];
// var nums = [9];
plusOne(nums);
