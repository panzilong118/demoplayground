var Mediator = function(){
  var _msg = {};
  return {
    register : function(type,action){
      if(_msg[type]){
        _msg[type].push(action);
      }else{
        _msg[type] = [];
        _msg[type].push(action);
      }
    },
    send:function(type){
      if(_msg[type]){
        for(var i=0,len = _msg[type].length; i<len;i++){
          _msg[type][i] && _msg[type][i]();
        }
      }
    }
  }
}();

// Mediator.register('demo',function(){
//   console.log('first');
// })
//
// Mediator.register('demo',function(){
//   console.log('second');
// })
//
// Mediator.send('demo');

var showHideNavWidget = function(mod,tag,showOrHide){
  var mod = document.getElementById(mod),
      tag = mod.getElementsByTagName(tag),
      showOrHide = (!showOrHide || showOrHide == 'hide') ? 'hidden' : 'visible';
  for(var i = tag.length -1; i>=0; i--){
    tag[i].style.visibility = showOrHide;
  }
};

(function(){
  Mediator.register('hideAllNavNum',function(){
    showHideNavWidget('collection_nav','b',false);
  });
  Mediator.register('showAllNavNum',function(){
    showHideNavWidget('collection_nav','b',true);
  });
  Mediator.register('hideAllNavUrl',function(){
    showHideNavWidget('collection_nav','span',false);
  });
  Mediator.register('showAllNavUrl',function(){
    showHideNavWidget('collection_nav','span',true);
  });
})();

(function(){
  Mediator.register('hideAllNavNum',function(){
    showHideNavWidget('recommend_nav','b',false);
  });
  Mediator.register('showAllNavNum',function(){
    showHideNavWidget('recommend_nav','b',true);
  });
})();

(function(){
  Mediator.register('hideAllNavUrl',function(){
    showHideNavWidget('recently_nav','span','hide');
  });
  Mediator.register('showAllNavUrl',function(){
    showHideNavWidget('recently_nav','span','show');
  });
})();

(function(){
  var hideNum = document.getElementById('hide_num'),
      hideUrl = document.getElementById('hide_url');
  hideNum.onchange = function(){
    if(hideNum.checked){
      Mediator.send('hideAllNavNum');
    }else{
      Mediator.send('showAllNavNum');
    }
  };
  hideUrl.onchange = function(){
    if(hideUrl.checked){
      Mediator.send('hideAllNavUrl');
    }else{
      Mediator.send('showAllNavUrl');
    }
  };
})();
