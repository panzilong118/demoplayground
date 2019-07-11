// 原型式继承
// var A = function(){};
// A.prototype = {
//   length:2,
//   size:function(){
//     return this.length;
//   }
// }
//
// var a = new A();

//找位助手
// var A = function(){
//   return A.fn;
// };
// A.fn = A.prototype = {
//   length:2,
//   size:function(){
//     return this.length;
//   }
// }
//
// var a = new A();

//获取元素
// var A = function(selector){
//   return A.fn.init(selector);
// };
// A.fn = A.prototype = {
//   init:function(selector){
//     return document.getElementById(selector)
//   },
//   length:2,
//   size:function(){
//     return this.length;
//   }
// }

//一个大问题
// var A = function(selector){
//   return A.fn.init(selector);
// };
// A.fn = A.prototype = {
//   init:function(selector){
//     this[0] = document.getElementById(selector);
//     this.length = 1;
//     console.log(this === A.fn, this === A.prototype, this);
//     return this;
//   },
//   length:2,
//   size:function(){
//     return this.length;
//   }
// }


//覆盖获取
// var A = function(selector){
//   return new A.fn.init(selector);
// };
// A.fn = A.prototype = {
//   init:function(selector){
//     this[0] = document.getElementById(selector);
//     this.length = 1;
//     console.log(this === A.fn, this === A.prototype, this);
//     return this;
//   },
//   length:2,
//   size:function(){
//     return this.length;
//   }
// }

//对比jquery
// var A = function(selector){
//   return new A.fn.init(selector);
// };
// A.fn = A.prototype = {
//   constructor:A,
//   init:function(selector){
//     console.log(this.constructor,"<---------------this.constructor");
//     this[0] = document.getElementById(selector);
//     this.length = 1;
//     console.log(this === A.fn, this === A.prototype, this);
//     return this;
//   },
//   length:2,
//   size:function(){
//     return this.length;
//   }
// }
// A.fn.init.prototype = A.fn;

//丰富元素获取
// var A = function(selector,context){
//   return new A.fn.init(selector,context);
// };
// A.fn = A.prototype = {
//   constructor:A,
//   init:function(selector,context){
//     this.length = 0,
//     context = context || document;
//     if(~selector.indexOf('#')){
//       this[0] = document.getElementById(selector.slice(1));
//       this.length = 1;
//     }else{
//       var doms = context.getElementsByTagName(selector),
//           i = 0,
//           len = doms.length;
//       for(; i<len; i++){
//         this[i] = doms[i];
//       }
//       this.length = len;
//     }
//     this.context = context;
//     this.selector = selector;
//     return this;
//   },
//   length:2,
//   size:function(){
//     return this.length;
//   }
// }
// A.fn.init.prototype = A.fn;

//var demo = A('#demo');
//var test = A('span');

//数组与对象
var A = function(selector,context){
  return new A.fn.init(selector,context);
};
A.fn = A.prototype = {
  constructor:A,
  init:function(selector,context){
    this.length = 0,
    context = context || document;
    if(~selector.indexOf('#')){
      this[0] = document.getElementById(selector.slice(1));
      this.length = 1;
    }else{
      var doms = context.getElementsByTagName(selector),
          i = 0,
          len = doms.length;
      for(; i<len; i++){
        this[i] = doms[i];
      }
      this.length = len;
    }
    this.context = context;
    this.selector = selector;
    return this;
  },
  length:2,
  size:function(){
    return this.length;
  },
  push:[].push,
  sort:[].sort,
  splice:[].splice
}
A.fn.init.prototype = A.fn;

//方法拓展
A.extend = A.fn.extend = function(){
  var i =1,
      len = arguments.length,
      target = arguments[0],
      j;
  if(i ==len ){
    target = this;
    i--;
  }
  for(; i<len; i++){
    for(j in arguments[i]){
      target[j] = arguments[i][j];
    }
  }
  return target;
}

// var demo = A.extend({first:1},{second:2},{third:3});
// console.log(demo,"<---------demo");
// A.extend(A.fn,{version:'1.0'});
// console.log(A('#demo').version,"<------------A('#demo').version");
// A.fn.extend({getVersion:function(){
//   return this.version;
// }})
// console.log(A('#demo').getVersion(),"<------------A('#demo').getVersion()");
// A.extend(A,{author:'潘子龙'});
// console.log(A.author,"<--------A.author");
// A.extend({nickname:'peter pan'});
// console.log(A.nickname,"<----------A.nickname");

//添加方法
A.fn.extend({
  on:(function(){
    return function(type, fn){
      var i = this.length - 1;
      for(; i>=0; i--){
        this[i].addEventListener(type,fn,false);
      }
      return this;
    }
  })()
})

A.extend({
  camelCase:function(str){
    return str.replace(/\-(\w)/g,function(all, letter){
      return letter.toUpperCase();
    });
  }
});

A.fn.extend({
  css:function(){
    var arg = arguments,
        len = arg.length;
    if(this.length < 1){
      return this;
    }
    if(len ===1){
      if(typeof arg[0] === 'string'){
        if(this[0].currentStyle){
          return this[0].currentStyle[name];
        }else{
          return getComputedStyle(this[0],false)[name];
        }
      }else if(typeof arg[0] === 'object'){
        for(var i in arg[0]){
          for(var j = this.length -1 ; j>= 0; j--){
            this[j].style[A.camelCase(i)] = arg[0][i];
          }
        }
      }
    }else if (len === 2){
      for(var j = this.length -1; j>=0; j--){
        this[j].style[A.camelCase(arg[0])] = arg[1];
      }
    }
    return this;
  }
});

A.fn.extend({
  attr:function(){
    var arg = arguments,
        len = arg.length;
    if(this.length <1){
      return this;
    }
    if(len === 1){
      if(typeof arg[0] === 'string'){
        return this[0].getAttribute(arg[0]);
      }else if(typeof arg[0] === 'object'){
        for(var i in arg[0]){
          for(var j = this.length-1; j>=0; j--){
            this[j].setAttribute(i, arg[0][i]);
          }
        }
      }
    }else if(len === 2){
      for(var j=this.length - 1; j>=0; j--){
        this[j].setAttribute(arg[0],arg[1]);
      }
    }
    return this;
  }
});

A.fn.extend({
  html:function(){
    var arg = arguments,
        len = arg.length;
    if(len === 0){
      return this[0] && this[0].innerHTML;
    }else{
      for(var i=this.length-1; i>=0; i--){
        this[i].innerHTML = arg[0];
      }
    }
    return this;
  }
});

A('#demo').css({
  height:'30px',
  border:'1px solid #000',
  'background-color' : 'red'
})
.attr('class','demo')
.html('add demo text')
.on('click',function(){
  console.log('clicked');
});
