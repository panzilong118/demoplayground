/**
 * @param {string} s
 * @return {string}
 */
// var reverseString = function(s) {
//   //先把字符串转换为数组，后翻转
//   var arr = Array.from(s);
//   var ret = "";
//   for(var i=arr.length-1; i>=0; i--){
//     ret += arr[i];
//   }
//   return ret;
// };

// var s = "hello";
// var s = "A man, a plan, a canal: Panama";
// reverseString(s);

/*
  344. Reverse String 翻转字符串
  https://leetcode.com/problems/reverse-string/
  Write a function that reverses a string. The input string is given as an array of characters char[].

  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

  You may assume all the characters consist of printable ascii characters.

  Example 1:

  Input: ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]
  Example 2:

  Input: ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  s.reverse();
};

var s = ["h","e","l","l","o"];
reverseString(s);
