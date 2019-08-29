// const arr = ['1', '11', '2', '222', '333'];
// var input = document.getElementById('name');
// input.addEventListener('keyup', function(e){
//   console.log(e.target.value);
//   const matchedList = [];
//   arr.forEach((element) => {
//     if (element.indexOf(e.target.value) > -1) {
//       matchedList.push(element);
//     }
//   });
//   console.log(matchedList, '<--matchedList');
//   // var matchPad = document.getElementsByClassName('match-pad');
//   // matchPad[0].style.display = 'block';
//   var matchPad = document.getElementById('match-pad');
//   matchPad.style.display = 'block';
//   // var html = '';
//   matchedList.forEach((element) => {
//     // html += `<li>${element}</li>`;
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(element));
//     matchPad.appendChild(li);
//   })
//   // console.log(html, '<---html');
//   // append 不行 You have not appended your li as a child to your ul element
//   // matchPad.append(html);
// })
// input.addEventListener('change', function(e){
//   var matchPad = document.getElementsByClassName('match-pad');
//   matchPad[0].style.display = 'none';
// })

/*
* 一. 用原生js实现，要求：不能搜索网上资源，做到组件化，时间100 min。
* 2. 页面内有一个input输入框，实现在数组arr查询命中词并要求autocomplete效果。
* input的autocomplete效果 ---又是一道腾讯编程题
* https://blog.csdn.net/github_36487770/article/details/80084512
*/

var arr = ['a','apple','abandon','bilibili','beep','before','become','being','highmaintains','by','bye','banana']

/*
* 原生JS中可以直接使用ID名称来获取元素，而不用使用getElementById()方法？
* 这个最初是 IE 里面的，后来 firefox chrome 好像也支持了。
* 不建议使用，这个不是标准里面的，将来不一定支持。
* 而且代码容易写混乱了，multiNavItem1 属于全局作用域，而且你可以给他赋值，赋值之后就是那个新的值，不赋值就是那个元素的值，
* 当有些 id 赋了值有些没有，那么有些就是这个 DOM 对象，有些不是，特别容易混乱了。
*/
input.addEventListener('input', function(event){
    // 做了trim
    var _value = event.target.value.trim()
    if(_value){
        // 提取了方法 组件
        autoComplete(_value, arr)
    }
    else{
        ul.innerHTML = ''
    }
})

function autoComplete(str, arr){
    var lis = [];
    var html = '';
    arr.forEach( (word)=>{
        if(word.startsWith(str)){
            // lis.push('<li>' + word + '</li>')
            html += `<li>${word}</li>`;
        }
    })
    // 可以用 innerHTML加
    // ul.innerHTML = lis.join('');
    ul.innerHTML = html;
}

function addToInput(li){
    var _txt = li.innerText
    input.value = _txt
}

// 事件委托
ul.addEventListener('click', function(event){
    if(event.target.tagName.toLowerCase() === 'li'){
        addToInput(event.target)
    }
})
