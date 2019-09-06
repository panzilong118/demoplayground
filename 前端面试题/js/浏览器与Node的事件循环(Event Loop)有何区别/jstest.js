/*
  浏览器与Node的事件循环(Event Loop)有何区别?
  https://juejin.im/post/5c337ae06fb9a049bc4cd218#comment
  总结：
  浏览器和Node 环境下，microtask 任务队列的执行时机不同
  Node端，microtask 在事件循环的各个阶段之间执行
  浏览器端，microtask 在事件循环的 macrotask 执行完之后执行
*/

// 浏览器中的 Event Loop
// Promise.resolve().then(()=>{
//   console.log('Promise1')
//   setTimeout(()=>{
//     console.log('setTimeout2')
//   },0)
// })
// setTimeout(()=>{
//   console.log('setTimeout1')
//   Promise.resolve().then(()=>{
//     console.log('Promise2')
//   })
// },0)
// browser Promise1，setTimeout1，Promise2，setTimeout2
// node10 Promise1，setTimeout1，setTimeout2, Promise2，

// Node 中的 Event Loop
// console.log('start')
// setTimeout(() => {
//   console.log('timer1')
//   Promise.resolve().then(function() {
//     console.log('promise1')
//   })
// }, 0)
// setTimeout(() => {
//   console.log('timer2')
//   Promise.resolve().then(function() {
//     console.log('promise2')
//   })
// }, 0)
// Promise.resolve().then(function() {
//   console.log('promise3')
// })
// console.log('end')
// nodejs10 start=>end=>promise3=>timer1=>timer2=>promise1=>promise2
// browser start=>end=>promise3=>timer1=>promise1=>timer2=>promise2

// setTimeout(function timeout () {
//   console.log('timeout');
// },0);
// setImmediate(function immediate () {
//   console.log('immediate');
// });
// nodejs10 immediate, timeout （并不会不固定）

// const fs = require('fs')
// fs.readFile(__filename, () => {
//     setTimeout(() => {
//         console.log('timeout');
//     }, 0)
//     setImmediate(() => {
//         console.log('immediate')
//     })
// })
// nodejs10 immediate, timeout

// setTimeout(() => {
//  console.log('timer1')
//  Promise.resolve().then(function() {
//    console.log('promise1')
//  })
// }, 0)
// process.nextTick(() => {
//  console.log('nextTick')
//  process.nextTick(() => {
//    console.log('nextTick')
//    process.nextTick(() => {
//      console.log('nextTick')
//      process.nextTick(() => {
//        console.log('nextTick')
//      })
//    })
//  })
// })
// nodejs10 nextTick=>nextTick=>nextTick=>nextTick=>timer1=>promise1

// Node与浏览器的 Event Loop 差异
// setTimeout(()=>{
//     console.log('timer1')
//     Promise.resolve().then(function() {
//         console.log('promise1')
//     })
// }, 0)
// setTimeout(()=>{
//     console.log('timer2')
//     Promise.resolve().then(function() {
//         console.log('promise2')
//     })
// }, 0)
// browser timer1=>promise1=>timer2=>promise2
// nodejs10 timer1=>timer2=>promise1=>promise2
