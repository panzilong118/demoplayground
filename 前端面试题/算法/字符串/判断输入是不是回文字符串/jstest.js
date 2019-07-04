// 实现一个函数，判断输入是不是回文字符串。
//回文串”是一个正读和反读都一样的字符串，比如“level”或者“noon”等等就是回文串。

function run(input) {
  if (typeof input !== 'string') return false;
  return input.split('').reverse().join('') === input;
}

run('level');
// run('levela');
