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

var firstUniqChar = function(s) {
    var index = -1;
    for(var i=0; i<=s.length-1; i++){
        //判断当前字符是否在之后的字符串中，如果不是，进入循环
        if(s.indexOf(s.charAt(i),i+1) == -1){
              //判断当前字符是否在之前的字符串中，如果不是，说明当前字符唯一
              var subString = s.substring(0,i);
              if(subString.includes(s.charAt(i))){

              }else{
                index = i;
                return index;
              }

        }

    }

    console.log(index,"<------------------index");
    return index;
};

// var s = "leetcode";
// var s = "loveleetcode";
var s = "cc";
// var s = "aadadaad";
firstUniqChar(s);
