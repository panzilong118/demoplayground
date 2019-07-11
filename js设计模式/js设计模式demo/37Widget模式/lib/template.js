F.module('lib/template',function(){
  var _TplEngine = function(str,data){
        if(data instanceof Array){
          var html = '',
              i = 0,
              len = data.length;
          for(;i<len;i++){
            html += _getTpl(str)(data[i]);
          }
          return html;
        }else{
          return _getTpl(str)(data);
        }
      },
      _getTpl = function(str){
        var ele = document.getElementById(str);
        if(ele){
          var html = /^(textarea|input)$/i.test(ele.nodeName) ? ele.value : ele.innerHTML;
          return _compileTpl(html);
        }else{
          return _compileTpl(str);
        }
      },
      _dealTpl = function(str){
        var _left = '{%',
            _right = '%}';
        return String(str)
          .replace(/&lt;/g,'<')
          .replace(/&gt;/g,'>')
          .replace(/[\r\t\n]/g,'')
          .replace(new RegExp(_left+'=(.*?)'+_right, 'g'),"',typeof($1)==='undefined'?'': $1, '")
          .replace(new RegExp(_left, 'g'), "');")
          .replace(new RegExp(_right, 'g'), "template_array.push('");
      },
      _compileTpl = function(str){
        var fnBody = "var template_array = [];\nvar fn = (function(data){\nvar template_key = '';\nconsole.log(templateData);\nfor(key in data){\ntemplate_key+=('var '+key+'=data[\"'+key+'\"];');\n}\neval(template_key);\ntemplate_array.push('"+_dealTpl(str)+"');\ntemplate_key = null;\n})(templateData);\nfn = null;\nreturn template_array.join('');";
        console.log(fnBody,"<-------------fnBody");
        return new Function("templateData",fnBody);
      };
  return _TplEngine;
})
