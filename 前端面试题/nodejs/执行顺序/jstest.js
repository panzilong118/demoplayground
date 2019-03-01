// process.nextTick(() => {
//   console.log('nextTick');
// })
//
// Promise.reslove().then(() => {
//   console.log('promise1');
// }).then(() => {
//   console.log('promise2');
// })
//
// setImmediate(() => {
//   console.log('setImmediate');
// })
//
// console.log('end');

/* 参考资料
 *  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 * 详解 setTimeout、setImmediate、process.nextTick 的区别 https://www.cnblogs.com/onepixel/articles/7605465.html
 * Process.nextTick 和 setImmediate 的区别？ https://www.zhihu.com/question/23028843
 * 从promise、process.nextTick、setTimeout出发，谈谈Event Loop中的Job queue https://github.com/forthealllight/blog/issues/5
 */
// 输出结果 'end' -> 'nextTick' -> 'promise1' -> 'promise2' -> 'setImmediate'
router.get('/swig', function (req, res, next) {
  res.send("oop");
  process.nextTick(() => {
    console.log('nextTick');
  })

  var promise1 = Promise.resolve(123);

    promise1.then(function(value) {
      console.log('promise1');
    }).then(function(value) {
      console.log('promise2');
    });

  // setTimeout(function(){
  //   console.log("setTimeout");
  // },0);

  setImmediate(() => {
    console.log('setImmediate');
  })

  console.log('end');
});

// setTimeout(function(){console.log(1)},0);
//
// new Promise(function(resolve,reject){
//    console.log(2);
//    resolve();
// }).then(function(){console.log(3)
// }).then(function(){console.log(4)});
//
// process.nextTick(function(){console.log(5)});
//
// console.log(6);
//
// setTimeout(function(){console.log(1)},0);
//
// new Promise(function(resolve,reject){
//    console.log(2);
//    setTimeout(function(){resolve()},0)
// }).then(function(){console.log(3)
// }).then(function(){console.log(4)});
//
// process.nextTick(function(){console.log(5)});
//
// console.log(6);

// window.name = 'bytedance';
// function A () {
//   this.name = 123;
// }
//
// A.prototype.getA = function () {
//   console.log(this,'<-----this');
//   return this.name + 1;
// }
// let a = new A();
// let funcA = a.getA;
// funcA();
