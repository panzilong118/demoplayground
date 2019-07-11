var Iterator = function(items, container){
  var container = container && document.getElementById(container) || document,
      items = container.getElementsByTagName(items),
      length = items.length,
      index = 0;
  var splice = [].splice;
  return {
    first : function(){
      index = 0;
      return items[index];
    },
    second : function(){
      index = length -1;
      return items[index];
    },
    pre : function(){
      if(--index > 0){
        return items[index];
      }else{
        index = 0;
        return null;
      }
    },
    next : function(){
      if(++index < length){
        return items[index];
      }else{
        index = length -1;
        return null;
      }
    },
    get : function(num){
      index = num >= 0 ? num%length : num%length + length;
      return items[index];
    },
    dealEach : function(fn){
      var args = splice.call(arguments, 1);
      for(var i=0; i<length; i++){
        fn.apply(items[i],args);
      }
    },
    dealItem : function(num, fn){
      fn.apply(this.get(num), splice.call(arguments, 2))
    },
    exclusive : function(num, allFn, numFn){
      this.dealEach(allFn);
      if(Object.prototype.toString.call(num) === "[object Array]" ){
        for(var i=0, len =num.length; i<len; i++){
          this.dealItem(num[i], numFn);
        }
      }else{
        this.dealItem(num, numFn);
      }
    }
  }
}

var demo = new Iterator('li' , 'container');
demo.dealEach(function(text,color){
  this.innerHTML = text;
  this.style.background = color;
},'test','pink');
demo.exclusive([2,3],function(){
  this.innerHTML = "被排除的";
  this.style.background = 'green';
},function(){
  this.innerHTML = "选中的";
  this.style.background = 'red';
})

//---------------数组迭代器 & 对象迭代器---------------------

var eachArray = function(arr, fn){
  var i = 0,
      len = arr.length;
  for(; i<len; i++){
    if(fn.call(arr[i], i, arr[i]) === false){
      break;
    }
  }
}

var eachObject = function(obj, fn){
  for(var i in obj){
    if(fn.call(obj[i], i, obj[i]) === false){
      break;
    }
  }
}

for(var arr = [], i=0; i<5; arr[i++] =i);
eachArray(arr,function(i, data){
  console.log(i, data);
})

var obj = {
  a : 23,
  b : 56,
  c : 67
}
eachObject(obj,function(i, data){
  console.log(i, data);
})

//-----------同步变量迭代器
var A = {
  common:{},
  client:{
    user:{
      username:"peter",
      uid:"123"
    }
  },
  server:{}
}

var AGetter = function(key){
  if(!A){
    return undefined;
  }
  var result = A;
  key = key.split('.');
  for(var i=0,len=key.length; i<len; i++){
    if(result[key[i]] !== undefined){
      result = result[key[i]];
    }else{
      return undefined;
    }
  }
  return result;
}

console.log(AGetter('client.user.username'));
console.log(AGetter('server.lang.local'));

var ASetter = function(key,val){
  if(!A){
    return false;
  }
  var result = A;
  key = key.split('.');
  for(var i = 0, len = key.length; i<len-1; i++){
    if(result[key[i]] === undefined){
      result[key[i]] = {};
    }
    if(!(result[key[i]] instanceof Object)){
      throw new Error('A.' + key.splice(0, i+1).join('.') + ' is not Object');
      return false;
    }
    result = result[key[i]];
  }
  return result[key[i]] = val;
}

console.log(ASetter('client.module.news.sports','on'));
console.log(ASetter('client.user.username.sports','on'));

//-----------------分支循环嵌套问题
window.onload = function(){
  var canvas = document.getElementsByTagName('canvas')[0],
      img = document.images[0],
      width = (canvas.width = img.width * 2)/2,
      height = canvas.height = img.height,
      ctx = canvas.getContext('2d');
  ctx.drawImage(img,0,0);

  function dealImage(t,x,y,w,h,a){
    var canvasData = ctx.getImageData(x,y,w,h);
    var data = canvasData.data;
    for(var i=0,len=data.length; i <len; i+=4){
      switch(t){
        case 'red' :
          data[i + 1] =0;
          data[i + 2] =0;
          data[i + 3] =a;
          break;
        case 'green' :
          data[i] =0;
          data[i + 2] =0;
          data[i + 3] =a;
          break;
        case 'blue' :
          data[i] =0;
          data[i + 1] =0;
          data[i + 3] =a;
          break;
        case 'gray' :
          var num = parseInt((data[i] + data[i+1] + data[i+2])/3);
          data[i] =num;
          data[i + 1] =num;
          data[i + 2] =num;
          data[i + 3] =a;
          break;
      }
    }
    ctx.putImageData(canvasData, width+x, y);
  }

  dealImage('gray',0,0,width,height,255);
  dealImage('gray',100,50,300,200,100);
  dealImage('gray',150,100,200,100,255);
}

window.onload = function(){
  var canvas = document.getElementsByTagName('canvas')[0],
      img = document.images[0],
      width = (canvas.width = img.width * 2)/2,
      height = canvas.height = img.height,
      ctx = canvas.getContext('2d');
  ctx.drawImage(img,0,0);

  function dealImage(t,x,y,w,h,a){
    var canvasData = ctx.getImageData(x,y,w,h);
    var data = canvasData.data;

    var Deal = function(){
      var method = {
        'default':function(i){
          return method['gray'](i);
        },
        'red':function(i){
          data[i + 1] =0;
          data[i + 2] =0;
          data[i + 3] =a;
        },
        'gray':function(i){
          data[i] = data[i + 1] = parseInt(data[i+2] = (data[i] + data[i+1] + data[i+2])/3);
          data[i+3] = a;
        }
      };
      return function(type){
        return method[type] || method['default'];
      }
    }();

    function eachData(fn){
      for(var i =0, len=data.length; i < len; i += 4){
        fn(i);
      }
    }

    eachData(Deal(t));
    ctx.putImageData(canvasData, width+x, y);
  }

  dealImage('gray',0,0,width,height,255);
  dealImage('gray',100,50,300,200,100);
  dealImage('gray',150,100,200,100,255);
}
