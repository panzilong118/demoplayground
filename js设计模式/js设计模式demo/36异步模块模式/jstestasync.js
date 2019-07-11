F.module(['lib/event','lib/dom'],function(events,dom){
  events.on('demo','click',function(){
    dom.html('demo','success123');
  })
})
