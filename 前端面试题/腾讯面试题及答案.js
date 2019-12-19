1. 下面这个ul，如何点击每一条li元素的时候，alert其当前所处列表中第几条？ 请用原生js实现
<ul id="container">
    <li value='1'>第一条</li>
    <li value='2'>第二条</li>
    <li value='3'>第三条</li>
</ul>

var ui = document.getElementById('container');
ui.addEventListener('click', (e) => {
  console.log(e.target.value); // 当前点击元素 li 的 value 1, 2, 3
  console.log(e.target.innerHTML); // 当前点击元素 li 的 content 第一条, 第二条, 第三条
  console.log(e.currentTarget); // ui dom
})

2.	请至少用2种不同的方式写出元素水平垂直居中的方法 (flex布局必须写出来)

3. 实现浏览器左右布局，左边固定宽度300px，右边自适应

4. 请写下如下输出结果及等待时间
console.log('begin');
for (var i = 0; i < 5; i++){
  setTimeout(function(){
    console.log(i);
  }, 1000)
}
console.log('end');

// begin
// end
// 5 5 5 5 5 （1秒后输出）

5.http请求成功状态码

6.都做过哪些前端性能优化

7.请使用正则表达式验证匹配用户输入了正确的邮箱格式 zhangsan@tencent.com

8.请写出输出结果
var a = 1;
function a(){}
console.info(typeof a); // number

9.如下代码的运行结果是什么？
process.nextTick(() => {
  console.log('nextTick');
})

Promise.reslove().then(() => {
  console.log('promise1');
}).then(() => {
  console.log('promise2');
})

setImmediate(() => {
  console.log('setImmediate');
})

console.log('end');

// 输出结果 'end' -> 'nextTick' -> 'promise1' -> 'promise2' -> 'setImmediate'

10.以下代码输出什么结果，this.name中this指向什么？
window.name = 'tencent';
function A () {
  this.name = 123;
}

A.prototype.getA = function () {
  console.log(this);
  return this.name + 1;
}
let a = new A();
let funcA = a.getA;
funcA();

// this指向window

11. 实现如下继承函数，传入Child和Father两个类，要求Child要继承于Father
function inherit (Child, Father) {

}

// function inherit (Child, Father) {
//   Child.prototype = Object.create(Father.prototype);
//   Child.prototype.constructor = Child;
// }
// function Father () {}
// function Child () {
//   Father.call(this);
// }


12. 实现一个简易的前端模版引擎
function tpl (template, data) {

}
使用tpl('<div class="{%className%}">{%name%}</div>', {
  name: 123,
  className: 'hd'
});
//<div class="hd">123</div>

// function tpl (template, data) {
//   return template.replace(/\{\%(.+?)\%\}/g, function(match, p1) {
//     return data[p1];
//   })
// }

13.打印结果
var a = 1;
function Fn1() {
  var a = 2;
  console.log(this.a + a);
}
function Fn2() {
  var a = 10;
  Fn1();
}
Fn2(); // 输出结果 3
var Fn3 = function(){
  this.a = 3;
}
Fn3.prototype = {
  a: 4
};
var fn3 = new Fn3();
Fn1.call(fn3); // 输出结果 5

14.实现bind方法

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

15.promise.all()实现

// 添加静态all方法
static all (list) {
  return new MyPromise((resolve, reject) => {
    /**
     * 返回值的集合
     */
    let values = []
    let count = 0
    for (let [i, p] of list.entries()) {
      // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
      this.resolve(p).then(res => {
      // p.then(res => { // 成功
        values[i] = res
        count++
        // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
        if (count === list.length) resolve(values)
      }, err => {
        // 有一个被rejected时返回的MyPromise状态就变成rejected
        reject(err)
      })
    }
  })
}

16.请实现一个发布订阅模式  调用示例
const event = new EventEmitter()
event.on('open', evt => console.log('Opening...', evt))
event.emit('open', 123)

17.编程 给定一个字符串，请统计字符串中出现最多的字母和次数
function findMaxDuplicateChar(str) {
  let maxChar = '';
  let maxValue = 1;

  // 补全代码...
  return {
    maxChar,
    maxValue
  };
}

const str = 'this is a fe test at toutiao on September';
findMaxDuplicateChar(str); // output: {maxChar: 't', maxValue: 7}

// 思路
// 1. 首先循环字符串创建一个map类型的对象 {t:7, ...}
// 2。遍历对象，找到最大值和最大值的字符串

function findMaxDuplicateChar(str) {
  let maxChar = '';
  let maxValue = 1;
  var obj = {};
  for (var i=0; i<str.length; i++){
    if(str.charAt(i) !== " "){
      if(!obj[str.charAt(i)]){
        obj[str.charAt(i)] = 1;
      } else {
        obj[str.charAt(i)]++;
      }
    }
  }

  for(var i in obj){
    if(obj[i]>maxValue){
      maxValue = obj[i];
      maxChar = i;
    }
  }
  console.log(maxValue, '<--------maxValue');
  console.log(maxChar, '<--------maxChar');
  return {
    maxChar,
    maxValue
  };
}

const str = 'this is a fe test at toutiao on September';
findMaxDuplicateChar(str);
