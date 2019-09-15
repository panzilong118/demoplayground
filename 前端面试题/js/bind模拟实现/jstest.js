/*
  Function.prototype.bind()
  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
  JavaScript深入之bind的模拟实现 #12
  https://github.com/mqyqingfeng/Blog/issues/12
*/

// 第一版
// Function.prototype.bind2 = function (context) {
//     var self = this;
//     return function () {
//         // 绑定函数可能是有返回值的
//         return self.apply(context);
//     }
//
// }
//
// var foo = {
//     value: 1
// };
//
// function bar() {
//     console.log(this.value);
// }
//
// // 返回了一个函数
// var bindFoo = bar.bind2(foo);
//
// bindFoo(); // 1

// 第二版
// Function.prototype.bind2 = function (context) {
//
//     var self = this;
//     // 获取bind2函数从第二个参数到最后一个参数
//     var args = Array.prototype.slice.call(arguments, 1);
//
//     return function () {
//         // 这个时候的arguments是指bind返回的函数传入的参数
//         var bindArgs = Array.prototype.slice.call(arguments);
//         return self.apply(context, args.concat(bindArgs));
//     }
//
// }
//
// var foo = {
//     value: 1
// };
//
// function bar(name, age) {
//     console.log(this.value);
//     console.log(name);
//     console.log(age);
// }
//
// var bindFoo = bar.bind2(foo, 'daisy');
// bindFoo('18');
// 1
// daisy
// 18

// 第三版
// Function.prototype.bind2 = function (context) {
//     var self = this;
//     var args = Array.prototype.slice.call(arguments, 1);
//
//     var fBound = function () {
//         var bindArgs = Array.prototype.slice.call(arguments);
//         // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，
//         // 可以让实例获得来自绑定函数的值
//         // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，
//         // 实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
//         // TODO: 不会有habit属性
//         // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
//         return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
//     }
//     // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
//     fBound.prototype = this.prototype;
//     return fBound;
// }

// 第三版问题
// 但是在这个写法中，我们直接将 fBound.prototype = this.prototype，
// 我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。

// Function.prototype.bind2 = function (context) {
//     var self = this;
//     var args = Array.prototype.slice.call(arguments, 1);
//
//     var fBound = function () {
//         var bindArgs = Array.prototype.slice.call(arguments);
//         self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
//     }
//     fBound.prototype = this.prototype;
//     return fBound;
// }
//
//
// function bar() {}
//
// var bindFoo = bar.bind2(null);
//
// bindFoo.prototype.value = 1;
// // 你会发现我们明明修改的是 bindFoo.prototype ，但是 bar.prototype 的值也被修改了，
// // 这就是因为 fBound.prototype = this.prototype导致的。
// console.log(bar.prototype.value) // 1


// 第四版
// 但是在这个写法中，我们直接将 fBound.prototype = this.prototype，
// 我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。
// 这个时候，我们可以通过一个空函数来进行中转：
Function.prototype.bind2 = function (context) {
  if (typeof this !== 'function') {
    // closest thing possible to the ECMAScript 5
    // internal IsCallable function
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};

  var fBound = function () {
      var bindArgs = Array.prototype.slice.call(arguments);
      return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
  }
  // 维护原型关系 - 为了让 fBound 构造的实例能够继承绑定函数的原型中的值
  fNOP.prototype = this.prototype;
  // 下行的代码使fBound.prototype是fNOP的实例,因此
  // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
  fBound.prototype = new fNOP();
  // 以下3句可以用Object.create(代替)
  // var fNOP = function () {};
  // fNOP.prototype = this.prototype;
  // fbound.prototype = new fNOP();
  // fbound.prototype = Object.create(this.prototype);
  // Object.create 的模拟实现就是：
  // Object.create = function( o ) {
  //   function f(){}
  //   f.prototype = o;
  //   return new f;
  // };
  return fBound;
}


// var value = 2;
//
// var foo = {
//     value: 1
// };
//
// function bar(name, age) {
//     this.habit = 'shopping';
//     console.log(this.value);
//     console.log(name);
//     console.log(age);
// }
//
// bar.prototype.friend = 'kevin';
// var bindFoo = bar.bind2(foo, 'daisy');
//
// // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
// // bindFoo('18');
// var obj = new bindFoo('18');
// // undefined
// // daisy
// // 18
// console.log(obj.habit);
// console.log(obj.friend);
// shopping
// kevin


// 问题1 有个疑惑，最终代码中不需要将 fBound 的 constructor 给指回来吗？
// fBound.prototype.constructor = fBound;
// 我们先看下原生的 bind() 方法的特性：
// bind 方法所返回的函数并不包含 prototype 属性，
// 并且将这些绑定的函数用作构造函数所创建的对象从原始的未绑定的构造函数中继承 prototype
// 这就意味着如果你打印构造函数所创建的对象的 constructor 属性，
// 应该指向未绑定的构造函数,举个例子：
// var foo = { value: 1};
// function bar() {}
// var bindFoo = bar.bind2(foo);
// var obj = new bindFoo();
// console.log(obj.constructor);
// 原生会打印 bar 函数，如果 fBound.prototype.constructor = fBound 的话，
// 就变成了打印 fBound 函数，如果没有这句话，因为 fNOP.prototype = this.prototype;
// fBound.prototype = new fNOP(); 的缘故，就会指向 bar 函数
