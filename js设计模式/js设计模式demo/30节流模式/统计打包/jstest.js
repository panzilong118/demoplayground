var throttle = function(){
  var isClear = arguments[0],fn;
  if(typeof isClear === 'boolean'){
    fn = arguments[1];
    fn.__throttleID && clearTimeout(fn.__throttleID);
  }else{
    fn = isClear;
    param = arguments[1];
    var p = $.extend({
      context:null,
      args:[],
      time:300
    },param);
    arguments.callee(true,fn);
    fn.__throttleID = setTimeout(function(){
      fn.apply(p.context, p.args);
    },p.time);
  }
}

// function moveScroll(){
//   var top = $(document).scrollTop();
//   $('#back').animate({top:top+300},400,'easeOutCubic');
// }
//
// $(window).on('scroll',function(){
//   throttle(moveScroll);
// });

//优化浮层
// function J(id){
//   return document.getElementById(id);
// }
// function Jtag(tag, container){
//   container = container || document;
//   return container.getElementsByTagName(tag);
// }
// var Layer = function(id){
//   this.container = J(id);
//   this.layer = Jtag('div',this.container)[0];
//   this.lis = Jtag('li', this.container);
//   this.imgs = Jtag('img',this.container);
//   this.bindEvent();
// }
// Layer.prototype = {
//   bindEvent:function(){
//     var that = this;
//     function hideLayer(){
//       that.layer.className = '';
//     }
//     function showLayer(){
//       that.layer.className = 'show';
//     }
//     that.on(that.container,'mouseenter',function(){
//       throttle(true,hideLayer);
//       throttle(showLayer);
//     }).on(that.container,'mouseleave',function(){
//       throttle(hideLayer);
//       throttle(true,showLayer);
//     });
//     for(var i=0; i<that.lis.length; i++){
//       that.lis[i].index = i;
//       that.on(that.lis[i],'mouseenter',function(){
//         var index = this.index;
//         for(var i =0; i<that.imgs.length; i++){
//           that.imgs[i].className = '';
//         }
//         that.imgs[index].className = 'show';
//         that.layer.style.left = -22 + 60*index + 'px';
//       });
//     }
//   },
//   on:function(ele,type,fn){
//     ele.addEventListener ? ele.addEventListener(type,fn,false) : ele.attachEvent('on'+type,fn);
//     return this;
//   }
// }
// new Layer('icon');

//图片延时加载
// function LazyLoad(id){
//   this.container = document.getElementById(id);
//   this.imgs = this.getImgs();
//   this.init();
// }
//
// LazyLoad.prototype = {
//   init:function(){
//     this.update();
//     this.bindEvent();
//   },
//   getImgs:function(){
//     var arr = [];
//     var imgs = this.container.getElementsByTagName('img');
//     for(var i=0,len=imgs.length; i<len; i++){
//       arr.push(imgs[i]);
//     }
//     return arr;
//   },
//   update:function(){
//     if(!this.imgs.length){
//       return;
//     }
//     var i = this.imgs.length;
//     for(--i; i >= 0; i--){
//       if(this.shouldShow(i)){
//         this.imgs[i].src = this.imgs[i].getAttribute('data-src');
//         this.imgs.splice(i,1);
//       }
//     }
//   },
//   shouldShow:function(i){
//     var img = this.imgs[i],
//         scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
//         scrollBottom = scrollTop + document.documentElement.clientHeight,
//         imgTop = this.pageY(img),
//         imgBottom = imgTop + img.offsetHeight;
//     if( (imgBottom > scrollTop && imgBottom < scrollBottom) || (imgTop > scrollTop && imgTop < scrollBottom) ){
//       return true;
//     }else{
//       return false;
//     }
//   },
//   pageY:function(element){
//     if(element.offsetParent){
//       return element.offsetTop + this.pageY(element.offsetParent);
//     }else{
//       return element.offsetTop;
//     }
//   },
//   on:function(element,type,fn){
//     if(element.addEventListener){
//       addEventListener(type,fn,false);
//     }else{
//       element.attachEvent('on'+type, fn, false);
//     }
//   },
//   bindEvent:function(){
//     var that = this;
//     this.on(window,'resize',function(){
//       throttle(that.update,{context:that});
//     });
//     this.on(window,'scroll',function(){
//       throttle(that.udpate,{context:that});
//     });
//   }
// }
//
// new LazyLoad('container');

//统计打包
var LogPack = function(){
  var data = [],
      MaxNum = 10,
      itemSplitStr = '|',
      keyValueSplitStr = '*',
      img = new Image();
  function sendLog(){
    var logStr = '';
        fireData = data.splice(0,MaxNum);
    for(var i=0, len = fireData.length; i<len; i++){
      logStr += 'log' + i + '=';
      for(var j in fireData[i]){
        logStr += j + keyValueSplitStr + fireData[i][j];
        logStr += itemSplitStr;
      }
      logStr = logStr.replace(/\|$/,'') + '$';
    }
    logStr += 'logLength=' + len;
    img.src = 'a.gif?'+logStr;
  }
  return function(param){
    if(!param){
      sendLog();
      return;
    }
    data.push(param);
    data.length >= MaxNum && sendLog();
  }
}();

var btn = $('#btn');

btn.onclick = function(){
  LogPack({
    btnId:this.id,
    context:this.innerHTML,
    type:'click'
  });
};

btn.onmouseover = function(){
  LogPack({
    btnId:this.id,
    context:this.innerHTML,
    type:'onmouseover'
  });
};
