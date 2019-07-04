/*
  实现一个函数，判断输入是不是回文字符串。
  回文串”是一个正读和反读都一样的字符串，比如“level”或者“noon”等等就是回文串。
  这个是数组的实现方式。
*/

// function run(input) {
//   if (typeof input !== 'string') return false;
//   return input.split('').reverse().join('') === input;
// }
//
// run('level');
// run('levela');

/*
  字符串方式
  note: Math.floor() 返回小于或等于一个给定数字的最大整数。
  Math.floor() === 向下取整
*/

// function (str){
//     for (let i = 0; i < Math.floor(str.length/2); i++) {
//         if (str.substr(i, 1) !== str.substr(str.length - i - 1, 1))  return false
//     }
//     return true
// }

function run(str){
  for (let i = 0; i < Math.floor(str.length/2); i++) {
      if (str.charAt(i) !== str.charAt(str.length - i - 1)){
        return false;
      }
  }
  return true;
}
// run('level');
// run('levela');
run('noon');
