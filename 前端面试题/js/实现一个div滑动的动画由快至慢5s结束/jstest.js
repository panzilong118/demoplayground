/*
* 一. 用原生js实现，要求：不能搜索网上资源，做到组件化，时间100 min。
* 1. 实现一个div滑动的动画，由快至慢5s结束（不准用css3)。
* 原生js 动画
* https://juejin.im/post/5c27105af265da61285a332f
*/
var container = document.getElementById('container');

function animate(ele,spd) {
    var start = Date.now(); // remember start time
    var timer = setInterval(function() {
        var timePassed = Date.now() - start;
        console.log(timePassed, '<---timePassed');
        var step = Math.ceil(Math.abs(timePassed - 5000)/1000)
        // console.log(step, '<---step');
        if (timePassed >= 5000) {
            clearInterval(timer); // finish the animation after 2 seconds
            return;
        }
        let leftpx = ele.offsetLeft + step;
        // console.log(ele.offsetLeft, '<----ele.offsetLeft');
        // console.log(leftpx, '<----leftpx');
        ele.style.left = leftpx + 'px';
    }, spd);
}
//组件 - animate
animate(container, 15);
