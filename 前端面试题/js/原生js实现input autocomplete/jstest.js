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
*/

var arr = ['a','apple','abandon','bilibili','beep','before','become','being','highmaintains','by','bye','banana']

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
