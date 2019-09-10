/*
  自建js监听事件 江陵
  监听步骤：
  1.其实就是把on的第二个参数（方法）存入到对象或者数组
  2.然后emit的时候调用该方法就可以了
*/
function instance(){}
instance.prototype.events = {}
instance.prototype.on = function(name,fn){
    //2
    this.events[name] = fn
}
instance.prototype.emit = function(name){
    //4
    this.events[name]()
}
var a = new instance();
//1
a.on("test",function(){
    //5
    alert("test");
})
//3
a.emit("test");
