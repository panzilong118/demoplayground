/*
* instanceof https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof
*/

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var auto = new Car('Honda', 'Accord', 1998);
// instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
// instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
console.log(auto instanceof Car); // expected output: true
// 构造函数的prototype属性 等于 实例的原型
Car.prototype === auto.__proto__; // true

console.log(auto instanceof Object); // expected output: true
// 构造函数的prototype属性 等于 实例的原型的原型
Object.prototype === auto.__proto__.__proto__; //true

// 定义构造函数
function C(){}
function D(){}

var o = new C();

o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype
C.prototype === o.__proto__ // true

o instanceof D; // false，因为 D.prototype不在o的原型链上
D.prototype === o.__proto__ // false

o instanceof Object; // true,因为Object.prototype.isPrototypeOf(o)返回true
Object.prototype === o.__proto__.__proto__ // true

C.prototype instanceof Object // true,同上
Object.prototype === C.prototype.__proto__ // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false,C.prototype指向了一个空对象,这个空对象不在o的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true 因为C.prototype现在在o3的原型链上

var simpleStr = "This is a simple string";
var myString  = new String();
var newStr    = new String("String created with constructor");
var myDate    = new Date();
var myObj     = {};
var myNonObj  = Object.create(null);

simpleStr instanceof String; // 返回 false, 检查原型链会找到 undefined
myString  instanceof String; // 返回 true
newStr    instanceof String; // 返回 true
myString  instanceof Object; // 返回 true

myObj instanceof Object;    // 返回 true, 尽管原型没有定义
({})  instanceof Object;    // 返回 true, 同上
myNonObj instanceof Object; // 返回 false, 一种创建非 Object 实例的对象的方法

myString instanceof Date; //返回 false

myDate instanceof Date;     // 返回 true
myDate instanceof Object;   // 返回 true
myDate instanceof String;   // 返回 false

/*
* 浅谈 instanceof 和 typeof 的实现原理
* https://juejin.im/post/5b0b9b9051882515773ae714
*/

let person = function () {}
let programmer = function () {}
programmer.prototype = new person() // 继承
let nicole = new programmer()
nicole instanceof person // true
nicole instanceof programmer // true

function Foo() {}

Object instanceof Object // true
Function instanceof Function // true
Function instanceof Object // true
Foo instanceof Foo // false
Foo instanceof Object // true
Foo instanceof Function // true
