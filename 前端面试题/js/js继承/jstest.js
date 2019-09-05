/*
* JS中的继承(上)
* https://segmentfault.com/a/1190000014476341
* 一篇文章理解JS继承——原型链/构造函数/组合/原型式/寄生式/寄生组合/Class extends
* https://segmentfault.com/a/1190000015727237
*/

// 1. 原型链继承

// 父类
// function Person(name,age) {
//   this.name = name || 'unknow'
//   this.age = age || 0
// }
//
// // 为父类新曾一个方法
// Person.prototype.say = function() {         // 新增的代码
//     console.log('I am a person')
// }
//
// // 子类
// function Student(name){
//   this.name = name
//   this.score = 80
// }
//
// // 继承 注意,继承必须要写在子类方法定义的前面
// Student.prototype = new Person()
// // 在子类原型上添加属性 - constructor, 覆盖子类原型链中的constructor指向父类
// // 保证子类的构造函数指向子类自己
// // 所有涉及到原型链继承的继承方式都要修改子类构造函数的指向，否则子类实例的构造函数会指向SuperType。
// Student.prototype.constructor = Student;
//
// // 为子类新增一个方法(在继承之后,否则会被覆盖)
// Student.prototype.study = function () {     // 新增的代码
//     console.log('I am studing')
// }
//
// var stu = new Student('lucy')
//
// console.log(stu.name)  // lucy               --子类覆盖父类的属性
// console.log(stu.age)   // 0                  --父类的属性
// console.log(stu.score) // 80                 --子类自己的属性
// stu.say()              // I am a person      --继承自父类的方法
// stu.study()            // I am studing       --子类自己的方法

// 原型链继承的优缺点
// 优点：父类方法可以复用
// 缺点：1.父类的引用属性会被所有子类实例共享 2.子类构建实例时不能向父类传递参数

// 父类
// function Person() {
//   this.hobbies = ['music','reading']
// }
//
// // 子类
// function Student(){}
//
// // 继承
// Student.prototype = new Person()
//
// var stu1 = new Student()
// var stu2 = new Student()
//
// stu1.hobbies.push('basketball')
//
// console.log(stu1.hobbies)   // music,reading,basketball
// console.log(stu2.hobbies)   // music,reading,basketball

// 2. 构造函数继承
// 构造函数继承的优缺点
// 优点：1.父类的引用属性不会被共享 2.子类构建实例时可以向父类传递参数
// 缺点：父类的方法不能复用，子类实例的方法每次都是单独创建的。

// 优点1
// 父类
// function Person() {
//   this.hobbies = ['music','reading']
// }
//
// // 子类
// function Student(){
//     Person.call(this)              // 新增的代码
// }
//
// var stu1 = new Student()
// var stu2 = new Student()
//
// stu1.hobbies.push('basketball')
// console.log(stu1.hobbies)   // music,reading,basketball
// console.log(stu2.hobbies)   // music,reading

// 优点2
// // 父类
// function Person(name) {
//   this.say = function() {}    // 改动的代码
// }
//
// // 子类
// function Student(name){
//     Person.call(this,name)
// }
//
// var stu1 = new Student('lucy')
// var stu2 = new Student('lili')
// console.log(stu1.say === stu2.say)   // false

// 缺点
// 父类
// function Person(name) {
//   this.say = function() {}    // 改动的代码
// }
//
// // 子类
// function Student(name){
//     Person.call(this,name)
// }
//
// var stu1 = new Student('lucy')
// var stu2 = new Student('lili')
// console.log(stu1.say === stu2.say)   // false

// 3.组合继承
// 组合继承,就是各取上面2种继承的长处,普通属性 使用 构造函数继承,函数 使用 原型链继承
// 利用原型链继承要共享的属性,利用构造函数继承要独享的属性,实现相对完美的继承
// 组合继承的优缺点
// 优点：1.父类的引用属性不会被共享 2.子类构建实例时可以向父类传递参数 3.父类的方法可以被复用
// 缺点：调用了两次父类的构造函数，第一次给子类的原型添加了父类的name, arr属性，
// 第二次又给子类的构造函数添加了父类的name, arr属性，从而覆盖了子类原型中的同名参数。
// 这种被覆盖的情况造成了性能上的浪费。

// 父类
// function Person() {
//   this.hobbies = ['music','reading']
// }
//
// // 父类函数
// Person.prototype.say = function() {console.log('I am a person')}
//
// // 子类
// function Student(){
//     Person.call(this) // 构造函数继承(继承属性) // 第二次调用Person
// }
// // 继承
// Student.prototype = new Person() // 原型链继承(继承方法) // 第一次调用Person
//
// // 实例化
// var stu1 = new Student()
// var stu2 = new Student()
//
// stu1.hobbies.push('basketball')
// console.log(stu1.hobbies)           // music,reading,basketball
// console.log(stu2.hobbies)           // music,reading
//
// console.log(stu1.say == stu2.say)   // true

// 4.原型式继承
// 优点：父类方法可以复用
// 缺点：1.父类的引用属性会被所有子类实例共享 2.子类构建实例时不能向父类传递参数

// function objectCreate(Father){
//   function Child(){}
//   Child.prototype = Father;
//   return new Child();
// }

// var person = {
//     name: "Nicholas",
//     friends: ["Shelby", "Court", "Van"]
// };
//
// var anotherPerson = objectCreate(person);
// // var anotherPerson = Object.create(person);
// anotherPerson.name = "Greg";
// anotherPerson.friends.push("Rob");
//
// var yetAnotherPerson = objectCreate(person);
// // var yetAnotherPerson = Object.create(person);
// yetAnotherPerson.name = "Linda";
// yetAnotherPerson.friends.push("Barbie");
// console.log(person.friends);   //"Shelby,Court,Van,Rob,Barbie"

// 5.寄生式继承
// 核心：使用原型式继承获得一个目标对象的浅复制，然后增强这个浅复制的能力。
// 优缺点：仅提供一种思路，没什么优点
// function createAnother(original){
//     // var clone=objectCreate(original);    //通过调用函数创建一个新对象
//     var clone = Object.create(original);
//     clone.sayHi = function(){      //以某种方式来增强这个对象
//         console.log("hi");
//     };
//     return clone;                  //返回这个对象
// }
//
// var person = {
//     name: "Nicholas",
//     friends: ["Shelby", "Court", "Van"]
// };
//
// var anotherPerson = createAnother(person);
// anotherPerson.sayHi(); //"hi"

// 6.寄生组合继承
// 寄生组合继承是先创建子类实例this对象，然后再对其增强
// 参考 Object.create()
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
function inheritPrototype(Child, Father){
    // 寄生组合继承是先创建子类实例this对象，然后再对其增强
    // var prototype = objectCreate(Father.prototype); // 创建了父类原型的浅复制
    // var prototype = Object.create(Father.prototype);
    // prototype.constructor = Child;             // 修正原型的构造函数
    // Child.prototype = prototype;               // 将子类的原型替换为这个原型
    Child.prototype = Object.create(Father.prototype);
    Child.prototype.constructor = Child;
}

function Father(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

Father.prototype.sayName = function(){
    alert(this.name);
};

function Child(name, age){
    Father.call(this, name);
    this.age = age;
}
// 核心：因为是对父类原型的复制，所以不包含父类的构造函数，也就不会调用两次父类的构造函数造成浪费
inheritPrototype(Child, Father);
Child.prototype.sayAge = function(){
    alert(this.age);
}
var child = new Child('baby', 4);

// 7.ES6 Class extends
// ES6先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），
// 然后再用子类的构造函数修改this。

// class Father {}
//
// class Child extends Father {
//   constructor() {
//     super();
//   }
// }

// ES6实现继承的具体原理
// class Father {}
// class Child {}
//
// // Object.setPrototypeOf() 方法设置一个指定的对象的原型
// // ( 即, 内部[[Prototype]]属性）到另一个对象或  null。
// // obj - 要设置其原型的对象。 prototype - 该对象的新原型(一个对象 或 null).
// // Object.setPrototypeOf(obj, prototype)
//
// Object.setPrototypeOf = function (obj, proto) {
//   obj.__proto__ = proto;
//   return obj;
// }
//
// // Child 的实例继承 Father 的实例
// Object.setPrototypeOf(Child.prototype, Father.prototype);
//
// // Child 继承 Father 的静态属性
// Object.setPrototypeOf(Child, Father);


// 实现如下继承函数，传入Child和Father两个类，要求Child要继承于Father
// function inherit (Child, Father) {
//   Child.prototype = Object.create(Father.prototype);
//   Child.prototype.constructor = Child;
// }
// function Father () {}
// function Child () {
//   Father.call(this);
// }
