// /**
//  * @param {string} s
//  * @return {number}
//  * 未完成
//  */
// var lengthOfLongestSubstring = function(s) {
//     var max = 0;
//     var obj = {};
//     var subString = '';
//     var startIndex = 0;
//     var submax = 0;
//     for (let i = 0; i < s.length; i++) {
//       if (!obj[s.charAt(i)]) {
//         obj[s.charAt(i)] = 1;
//       } else {
//         subString = s.substring(startIndex, i);
//         startIndex = i;
//         var position = 0;
//         for (item in obj) {
//           position++;
//           if (item !== s.charAt(i)) {
//             return;
//           }
//         }
//         if (position !== 0) {
//           obj = {};
//         } else {
//           delete obj[s.charAt(i)];
//         }
//         obj[s.charAt(i)] = 1;
//         if (subString.length > max) {
//           max = subString.length;
//         }
//       }
//     }
//     for (item in obj) {
//       submax++;
//     }
//     if (submax > max) {
//       max = submax;
//     }
//     return max;
// };
//
// var s = 'dvdf';
// // var s = 'ab';
// // var s = 'pwwkew';
// lengthOfLongestSubstring(s);

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = {};
  let max = 0;
  let i = 0;
  let j = 0;
  while(j < s.length){
      if(map[s[j]]){
          map[s[i]] = null;
          i ++;
      }
      else{
          map[s[j]] = true;
          max = Math.max(max, j - i + 1);
          j ++;
      }
  }
  return max;
};

// var s = 'dvdf';
// var s = 'ab';
var s = 'pwwkew';
lengthOfLongestSubstring(s);
