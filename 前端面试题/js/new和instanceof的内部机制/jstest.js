// new和instanceof的内部机制
// new
function Person (name) {
    this.name = name;
}
/*
 * 创建一个新对象，同时继承对象类的原型，即Person.prototype；
 * 执行对象类的构造函数，同时该实例的属性和方法被this所引用，即this指向新构造的实例；
 * 如果构造函数return了一个新的“对象”，那么这个对象就会取代整个new出来的结果。
 * 如果构造函数没有return对象，那么就会返回步骤1所创建的对象，即隐式返回this。
 * （一般情况下构造函数不会返回任何值，不过在一些特殊情况下，如果用户想覆盖这个值，可以选择返回一个普通的对象来覆盖。）
 */

// let p = new Person();
const new1 = function (name) {
    // 创建一个新对象
    const obj = {};
    // 该对象继承构造函数的原型，即Person.prototype；
    obj.__proto__ = Person.prototype;
    // 其他赋值语句...
    Person.call(obj, name);
    return obj;
};

const p1 = new1('zhangsan');

/* -------------------- */

// instanceof
while(x.__proto__!==null) {
    if(x.__proto__===y.prototype) {
        return true;
    }
    x.__proto__ = x.__proto__.proto__;
}
if(x.__proto__==null) {return false;}

/* -------------------- */

function F() {}
function O() {}

O.prototype = new F();
var obj = new O();

console.log(obj instanceof O); // true
console.log(obj instanceof F); // true
console.log(obj.__proto__ === O.prototype); // true
console.log(obj.__proto__.__proto__ === F.prototype); // true

/* -------------------- */

function F() {}
function O() {}

var obj = (function () {
    var obj1 = {};
    obj1.__proto__ = F.prototype; // new F();
    O.prototype = obj1; // O.prototype = new F();
    var obj = {};
    obj.__proto__ = O.prototype; // new O();
    return obj;
})();

console.log(obj instanceof O); // true
console.log(obj instanceof F); // true
console.log(obj.__proto__ === O.prototype); // true
console.log(obj.__proto__.__proto__ === F.prototype); // true
