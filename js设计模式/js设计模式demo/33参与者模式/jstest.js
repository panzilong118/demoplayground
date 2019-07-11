// function bind(fn, context){
//   return function(){
//     return fn.apply(context,arguments);
//   }
// }

// var demoObj = {
//   title:'这是一个例子'
// }
//
// function demoFn(){
//   console.log(this.title);
// }
//
// var bindFn= bind(demoFn,demoObj);

// var btn = document.getElementsByTagName('button')[0];
var p = document.getElementsByTagName('p')[0];
//
function demoFn(){
  console.log(arguments,this);
}

// var bindFn = bind(demoFn);
// var bindFn = bind(demoFn,btn);
// var bindFn = bind(demoFn,p);
// var bindFn = demoFn.bind(p);
// btn.addEventListener('click',bindFn);
// btn.removeEventListener('click',bindFn);
// p.addEventListener('click',bindFn);

//curry
// function curry(fn){
//   var Slice = [].slice;
//   var args = Slice.call(arguments,1);
//   return function(){
//     var addArgs = Slice.call(arguments),
//         allArgs = args.concat(addArgs);
//     return fn.apply(null,allArgs);
//   }
// }
//
// function add(num1,num2){
//   return num1 + num2;
// }
//
// function add5(num){
//   return add(5,num);
// }

// var add5 = curry(add,5);
// var add7add8 = curry(add,7,8);

function bind(fn,context){
  var Slice = Array.prototype.slice,
      args = Slice.call(arguments,2);
  return function(){
    var addArgs = Slice.call(arguments),
        allArgs = addArgs.concat(args);
    return fn.apply(context,allArgs);
  }
}

var demoData1 = {
  text:'这是第一组数据'
}

var demoData2 = {
  text:'这是第二组数据'
}

// var bindFn = bind(demoFn,btn,demoData1);
// var bindFn = bind(demoFn,btn,demoData1,demoData2);
// var bindFn = bind(demoFn,p,demoData1);
var bindFn = demoFn.bind(p,demoData1);
// btn.addEventListener('click',bindFn);
p.addEventListener('click',bindFn);
