F.module(['lib/template','lib/dom'],function(template,dom){

  var data = {
    tagCloud:[
      {
        is_selected:true,
        title:"这是一本设计模式书",
        text:"设计模式"
      },
      {
        is_selected:false,
        title:"这是一本HTML书",
        text:"HTML"
      },
      {
        is_selected:null,
        title:"这是一本CSS书",
        text:"CSS"
      },
      {
        is_selected:'',
        title:"这是一本JAVASCRIPT书",
        text:"JAVASCRIPT"
      }
    ]
  }

  var str = template('demo_script',data);
  dom.html('test',str);
})
