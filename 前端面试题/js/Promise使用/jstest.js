/*
  Promise使用
  阮一峰 es6标准入门
  Promise 对象
  http://es6.ruanyifeng.com/#docs/promise
*/

// 一个Promise对象的简单例子
// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }
//
// timeout(1000).then((value) => {
//   console.log(value); // done
// });

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     // 不能加括号传值，否则resolve方法会立即执行，是延迟失去作用
//     setTimeout(resolve('done1'), ms);
//   });
// }
//
// // const res = timeout(100).then(...) res为promise对象，不是返回值
// timeout(100).then((value) => {
//   console.log(value); // done1
// });

// Promise 新建后就会立即执行。
// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   resolve();
// });
//
// promise.then(function() {
//   console.log('resolved.');
// });
//
// console.log('Hi!');
//
// // Promise
// // Hi!
// // resolved

// 异步加载图片的例子
// 如果加载成功，就调用resolve方法，否则就调用reject方法. 尝试不同的url
// function loadImageAsync(url) {
//   return new Promise(function(resolve, reject) {
//     const image = new Image();
//
//     image.onload = function() {
//       resolve(image);
//     };
//
//     image.onerror = function() {
//       reject(new Error('Could not load image at ' + url));
//     };
//
//     image.src = url;
//   });
// }
// const url = './img/3.jpg'; // './img/3.jpghaha'; - reject
// loadImageAsync(url).then((res) => {
//   console.log(res);
// });

// resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例
// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })
//
// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })
//
// p2
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// // Error: fail

// 调用resolve或reject并不会终结 Promise 的参数函数的执行
// new Promise((resolve, reject) => {
//   resolve(1); // 最好 return resolve(1); 这样就不会执行下面的语句
//   console.log(2);
// }).then(r => {
//   console.log(r);
// });
// // 2
// // 1

// Promise.resolve() 方法
// const p = Promise.resolve('Hello');
//
// p.then(function (s){
//   console.log(s)
// });
// // Hello

// setTimeout(function () {
//   console.log('three');
// }, 0);
//
// Promise.resolve().then(function () {
//   console.log('two');
// });
//
// console.log('one');

// one
// two
// three
