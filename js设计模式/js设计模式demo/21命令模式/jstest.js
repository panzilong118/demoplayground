var viewCommand = (function(){

  var tpl = {
    product : [
      '<div style="display:inline-block">',
        '<img src="{#src#}" style="width:200px;height:200px;">',
        '<p>{#text#}</p>',
      '</div>'
    ].join(''),
    title : [
      '<div class="title">',
        '<div class="main">',
          '<h2>{#title#}</h2>',
          '<p>{#tips#}</p>',
        '</div>',
      '</div>'
    ].join('')
  },
  html ='';

  function formateString(str,obj){
    return str.replace(/\{#(\w+)#\}/g, function(match, key){
      return obj[key];
    })
  }

  var Action = {
    create:function(data, view){
      if(data.length){
        for(var i=0, len = data.length; i<len; i++){
          html += formateString(tpl[view], data[i]);
        }
      }else{
        html += formateString(tpl[view], data);
      }
    },
    display:function(container, data, view){
      if(data){
        this.create(data, view);
      }
      document.getElementById(container).innerHTML = html;
      html = '';
    }
  }
  return function excute(msg){
    msg.param = Object.prototype.toString.call(msg.param) === "[object Array]" ? msg.param : [msg.param];
    Action[msg.command].apply(Action, msg.param);
  }
})();

var productData = [
  {
    src : 'http://img.zcool.cn/community/0142135541fe180000019ae9b8cf86.jpg@1280w_1l_2o_100sh.png',
    text : 'text1'
  },
  {
    src : 'http://img3.redocn.com/tupian/20150312/haixinghezhenzhubeikeshiliangbeijing_3937174.jpg',
    text : 'text2'
  },
  {
    src : 'http://img07.tooopen.com/images/20170316/tooopen_sy_201956178977.jpg',
    text : 'text3'
  }
],
titleData = {
  title : 'summer hot!!!!',
  tips: 'hot like a family!!!!'
}

viewCommand({
  command: 'display',
  param: ['title',titleData,'title']
});

viewCommand({
  command: 'create',
  param: [{
    src:'http://img.zcool.cn/community/0113ce596f13c6a8012193a3eff959.jpg@2o.jpg',
    text:'insert one!!!'
  },'product']
});

viewCommand({
  command: 'display',
  param: ['product',productData,'product']
});
