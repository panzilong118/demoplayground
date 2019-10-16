/*
  7. Reverse Integer 翻转数字
  https://leetcode.com/problems/reverse-integer/
  Given a 32-bit signed integer, reverse digits of an integer.

  Example 1:

  Input: 123
  Output: 321
  Example 2:

  Input: -123
  Output: -321
  Example 3:

  Input: 120
  Output: 21
  Note:
  Assume we are dealing with an environment which could only store integers within
  the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem,
  assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 数字先转换为字符串，然后变成数组
  var arr = Array.from(x.toString());
  var num = '';
  // 翻转数组,并拼接成字符串
  if (x >= 0) {
    for (let i = arr.length - 1; i >= 0; i--) {
      num += arr[i];
    }
    // for (let j = 0; j <= num.length - 1; j++) {
    //   // 如果开头是0就去掉0
    //   if(num.startsWith(0)){
    //     num = num.slice(1);
    //   }
    // }
  } else {
    // 如果是负数，前面加上负号
    for (let i = arr.length - 1; i > 0; i--) {
      num += arr[i];
    }
    num = '-' + num;
  }
  // 字符串转成数字 | Number.parseInt(num);
  num = Number(num);
  // 判断下数字的范围 [−231,  231 − 1]
  if (num > 2147483647 || num < -2147483648 ) {
    num = 0;
  }
  return num;
};

var x = 1230;
// var x = -123;
// var x = 1200;
// var x = -1200;
// var x =1534236469;
const res = reverse(x);
console.log(res);
