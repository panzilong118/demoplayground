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
function J(id){
  return document.getElementById(id);
}
function Jtag(tag, container){
  container = container || document;
  return container.getElementsByTagName(tag);
}
var Layer = function(id){
  this.container = J(id);
  this.layer = Jtag('div',this.container)[0];
  this.lis = Jtag('li', this.container);
  this.imgs = Jtag('img',this.container);
  this.bindEvent();
}
Layer.prototype = {
  bindEvent:function(){
    var that = this;
    function hideLayer(){
      that.layer.className = '';
    }
    function showLayer(){
      that.layer.className = 'show';
    }
    that.on(that.container,'mouseenter',function(){
      throttle(true,hideLayer);
      throttle(showLayer);
    }).on(that.container,'mouseleave',function(){
      throttle(hideLayer);
      throttle(true,showLayer);
    });
    for(var i=0; i<that.lis.length; i++){
      that.lis[i].index = i;
      that.on(that.lis[i],'mouseenter',function(){
        var index = this.index;
        for(var i =0; i<that.imgs.length; i++){
          that.imgs[i].className = '';
        }
        that.imgs[index].className = 'show';
        that.layer.style.left = -22 + 60*index + 'px';
      });
    }
  },
  on:function(ele,type,fn){
    ele.addEventListener ? ele.addEventListener(type,fn,false) : ele.attachEvent('on'+type,fn);
    return this;
  }
}
new Layer('icon');
