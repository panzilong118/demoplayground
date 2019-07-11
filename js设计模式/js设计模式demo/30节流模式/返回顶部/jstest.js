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

function moveScroll(){
  var top = $(document).scrollTop();
  $('#back').animate({top:top+300},400,'easeOutCubic');
}

$(window).on('scroll',function(){
  throttle(moveScroll);
});
