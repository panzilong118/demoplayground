/*
* 实现一个简易的前端模版引擎
* tpl('<div class="{%className%}">{%name%}</div>', {
*   name: 123,
*   className: 'hd'
* })
*/

// String.prototype.replace()
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E6%8C%87%E5%AE%9A%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0
// replace() 方法返回一个由替换值（replacement）替换一些或所有匹配的模式（pattern）后的新字符串。
// 模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。
// 原字符串不会改变。
// 回调函数参数含义：
// 第一个参数 match： 匹配的子串
// 第二个参数 p1： 假如replace()方法的第一个参数是一个RegExp 对象，则代表第n个括号匹配的字符串。
// （对应于上述的$1，$2等。）
// 例如，如果是用 /(\a+)(\b+)/ 这个来匹配，p1 就是匹配的 \a+，p2 就是匹配的 \b+。
function tpl (template, data) {
  return template.replace(/\{\%(.+?)\%\}/g, function(match, p1) {
    return data[p1];
  })
}

const res = tpl('<div class="{%className%}">{%name%}</div>', {
  name: 123,
  className: 'hd'
});
