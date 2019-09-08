/*
window.requestAnimationFrame
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame
原生js 动画
https://juejin.im/post/5c27105af265da61285a332f
requestAnimationFrame的方式的优势如下：
1.经过浏览器优化，动画更流畅
2.窗口没激活时，动画将停止，省计算资源
3.更省电，尤其是对移动终端
requestAnimationFrame最大的优势是: 由系统来决定回调函数的执行时机
*/

var start = null;
var element = document.getElementById('container');
element.style.position = 'absolute';

// callback
// 下一次重绘之前更新动画帧所调用的函数(即上面所说的回调函数)。该回调函数会被传入DOMHighResTimeStamp参数，
// 该参数与performance.now()的返回值相同，它表示requestAnimationFrame() 开始去执行回调函数的时刻。
function step(timestamp) {
  // console.log(timestamp, '<--timestamp');
  if (!start) start = timestamp;
  var progress = timestamp - start;
  let left = Math.min(progress / 10, 200);
  console.log(left, '<----left');
  element.style.left = left + 'px';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
