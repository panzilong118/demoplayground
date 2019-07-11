var F = F || {};
F.define = function(str, fn){
  var parts = str.split('.'),
      old = parent = this,
      i = len = 0;
  if(parts[0] === 'F'){
    parts = parts.slice(1);
  }
  if(parts[0] ==='define' || parts[0] === 'module'){
    return;
  }
  for(len = parts.length; i<len; i++){
    if(typeof parent[parts[i]] === 'undefined'){
      parent[parts[i]] = {};
    }
    old = parent;
    parent = parent[parts[i]];
  }
  if(fn){
    old[parts[--i]] = fn();
  }
  return this;
}

F.define('string',function(){
  return{
    trim:function(str){
      // return console.log(str.replace(/^\s+|\s+$/g,''));
      return str.replace(/^\s+|\s+$/g,'');
    }
  }
});
//
// F.string.trim('测试用例。');

F.define('dom',function(){
  var $ = function(id){
    $.dom = document.getElementById(id);
    return $;
  }
  $.html = function(html){
    if(html){
      this.dom.innerHTML = html;
      return this;
    }else{
      // return console.log(this.dom.innerHTML);
      return this.dom.innerHTML;
    }
  }
  return $;
})
//
// F.dom('test').html()

// F.define('dom.addClass');
// F.dom.addClass = function(type,fn){
//   return function(className){
//     if(!~this.dom.className.indexOf(className)){
//       this.dom.className += ' ' + className;
//     }
//   }
// }();
//
// F.dom('test').addClass('test');

F.module = function(){
  var args = [].slice.call(arguments),
      fn = args.pop(),
      parts = args[0] && args[0] instanceof Array ? args[0] : args,
      modules = [],
      modIDs = '',
      i =0,
      ilen = parts.length,
      parent,j,jlen;
  while(i < ilen){
    if(typeof parts[i] === 'string'){
      parent = this;
      modIDs = parts[i].replace(/^F\./,'').split('.');
      for(j=0,jlen=modIDs.length;j<jlen;j++){
        parent = parent[modIDs[j]] || false;
      }
      modules.push(parent);
    }else{
      modules.push(parts[i]);
    }
    i++;
  }
  fn.apply(null,modules);
}

// F.module(['dom',document],function(dom,doc){
//   dom('test').html('new add!');
//   doc.body.style.background = 'red';
// });

F.module(['dom','string.trim'],function(dom,trim){
  var html = dom('test').html();
  var str = trim(html);
  console.log("*"+html+"*","*"+str+"*");
});
