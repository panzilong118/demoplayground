/*
* 你了解前端路由吗? - todo
* https://juejin.im/post/5ac61da66fb9a028c71eae1b
*/

class Routers {
  constructor() {
    // 以键值对的形式储存路由
    this.routes = {};
    // 当前路由的URL
    this.currentUrl = '';
    this.refresh = this.refresh.bind(this);
    // 那么我们只需要在实例化Class的时候监听上面的事件即可.
    window.addEventListener('load', this.refresh, false);
    window.addEventListener('hashchange', this.refresh, false);
  }
  // 将path路径与对应的callback函数储存
  route(path, callback) {
    this.routes[path] = callback || function() {};
  }
  // 刷新
  refresh() {
    // 获取当前URL中的hash路径
    this.currentUrl = location.hash.slice(1) || '/';
    // 执行当前hash路径的callback函数
    this.routes[this.currentUrl]();
  }
}

window.Router = new Routers();
var content = document.querySelector('body');
// change Page anything
function changeBgColor(color) {
  content.style.backgroundColor = color;
}
Router.route('/', function() {
  changeBgColor('yellow');
});
Router.route('/blue', function() {
  changeBgColor('blue');
});
Router.route('/green', function() {
  changeBgColor('green');
});
