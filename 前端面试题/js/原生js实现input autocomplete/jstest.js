// 2. 页面内有一个input输入框，实现在数组arr查询命中词并要求autocomplete效果。

const arr = ['1', '11', '2', '222', '333'];
var input = document.getElementById('name');
input.addEventListener('keyup', function(e){
  console.log(e.target.value);
  const matchedList = [];
  arr.forEach((element) => {
    if (element.indexOf(e.target.value) > -1) {
      matchedList.push(element);
    }
  });
  console.log(matchedList, '<--matchedList');
  // var matchPad = document.getElementsByClassName('match-pad');
  // matchPad[0].style.display = 'block';
  var matchPad = document.getElementById('match-pad');
  matchPad.style.display = 'block';
  // var html = '';
  matchedList.forEach((element) => {
    // html += `<li>${element}</li>`;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    matchPad.appendChild(li);
  })
  // console.log(html, '<---html');
  // append 不行 You have not appended your li as a child to your ul element
  // matchPad.append(html);
})
input.addEventListener('change', function(e){
  var matchPad = document.getElementsByClassName('match-pad');
  matchPad[0].style.display = 'none';
})
