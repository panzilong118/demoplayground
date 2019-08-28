var container = document.getElementById('container');

function animate(ele,spd){
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
animate(container, 15);
