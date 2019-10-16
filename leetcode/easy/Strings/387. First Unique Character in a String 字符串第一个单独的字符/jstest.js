/*
  387. First Unique Character in a String 字符串第一个单独的字符
  https://leetcode.com/problems/first-unique-character-in-a-string/
  Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

  Examples:

  s = "leetcode"
  return 0.

  s = "loveleetcode",
  return 2.
  Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */

// var firstUniqChar = function(s) {
//     var index = -1;
//     for(var i=0; i<=s.length-1; i++){
//         //这块不能判断重复的字符串
//         if(s.indexOf(s.charAt(i),i+1) == -1){
//             //不能只判断最后一个
//             if(i == s.length-1){
//               var subString = s.substring(0,s.length-1);
//               if(subString.includes(s.charAt(i))){
//                 return index;
//               }
//             }
//             index = i;
//             return index;
//         }
//
//     }
//
//     console.log(index,"<------------------index");
//     return index;
// };
//
// // var s = "leetcode";
// // var s = "loveleetcode";
// // var s = "cc";
// var s = "aadadaad";
// firstUniqChar(s);

/*
  思路：
  1. 正向遍历字符串，判断当前字符是否在之后的字符串中，如果不是，进入判断
  2. 判断当前字符是否在之前的字符串中，如果不是，说明当前字符唯一 （为了验证相同的字符 e.g. - cc）
*/

var firstUniqChar = function(s) {
  var index = -1;
  for (let i = 0; i < s.length; i++) {
    // 判断当前字符是否在之后的字符串中，如果不是，进入循环
    if (s.indexOf(s.charAt(i), i + 1) === -1) {
      // 判断当前字符是否在之前的字符串中，如果不是，说明当前字符唯一 为了验证相同的字符 e.g. - cc
      var subString = s.substring(0, i);
      if (!subString.includes(s.charAt(i))) {
        index = i;
        return index;
      }
    }
  }
  return index;
};

// var s = "leetcode";
// var s = "loveleetcode";
var s = "cc";
// var s = "aadadaad";
const res = firstUniqChar(s);
console.log(res);
