var Observer = (function(){
  var __messages = {};
  return {
    regist:function(type,fn){
      if(typeof __messages[type] === 'undefined'){
        __messages[type] = [fn];
      }else{
        __messages[type].push(fn);
      }
    },
    fire:function(type,args){
      if(!__messages[type])
        return;
      var events = {
        type:type,
        args:args||[]
      },
      i = 0,
      len = __messages[type].length;
      for(; i<len; i++){
        __messages[type][i].call(this,events);
      }
    },
    remove:function(type,fn){
      if(__messages[type] instanceof Array){
        var i = __messages[type].length -1;
        for(; i>=0; i--){
          __messages[type][i] === fn && __messages[type].splice(i,1);
        }
      }
    }
  }
})();

function $(id){
  return document.getElementById(id);
}

(function(){
  function addMsgItem(e){
    var text = e.args.text,
        ul = $('msg'),
        li = document.createElement('li'),
        span = document.createElement('span');
    span.innerHTML = 'delete';
    li.innerHTML = text;
    span.onclick = function(){
      ul.removeChild(li);
      Observer.fire('removeCommentMessage',{
        num : -1
      });
    }
    li.appendChild(span);
    ul.appendChild(li);
  }
  Observer.regist('addCommentMessage',addMsgItem);
})();

(function(){
  function changeMsgNum(e){
    var num = e.args.num;
    $('msg_num').innerHTML = parseInt($('msg_num').innerHTML) + num;
  }
  Observer.regist('addCommentMessage',changeMsgNum);
  Observer.regist('removeCommentMessage',changeMsgNum);
})();

(function(){
  $('user_submit').onclick = function(){
    var text = $('user_input');
    if(text.value === ''){
      return;
    }
    Observer.fire('addCommentMessage',{
      text:text.value,
      num:1
    });
    text.value = '';
  }
})();
