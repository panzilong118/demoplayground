/*
  event.preventDefault 和 e.stopPropagation 区别
  event.preventDefault
  https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
*/
// demo1
// 选中复选框是点击复选框的默认行为。下面这个例子说明了怎样阻止默认行为的发生：
// document.querySelector("#id-checkbox").addEventListener("click", function(event) {
//    document.getElementById("output-box").innerHTML +=
//     "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
//    event.preventDefault();
// }, false);


// demo2
// 这个例子说明了如何使用preventDefault()在文本编辑域中阻止有效的文本输入。
// 如今，你通常可以使用原生的HTML表单验证来代替。
// var myTextbox = document.getElementById('my-textbox');
// myTextbox.addEventListener('keypress', checkName, false);
//
// function checkName(evt) {
//   var charCode = evt.charCode;
//   if (charCode != 0) {
//     if (charCode < 97 || charCode > 122) {
//       evt.preventDefault();
//       displayWarning(
//         "Please use lowercase letters only."
//         + "\n" + "charCode: " + charCode + "\n"
//       );
//     }
//   }
// }
//
// var warningTimeout;
// var warningBox = document.createElement("div");
// warningBox.className = "warning";
//
// function displayWarning(msg) {
//   warningBox.innerHTML = msg;
//
//   if (document.body.contains(warningBox)) {
//     window.clearTimeout(warningTimeout);
//   } else {
//     // insert warningBox after myTextbox
//     myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
//   }
//
//   warningTimeout = window.setTimeout(function() {
//       warningBox.parentNode.removeChild(warningBox);
//       warningTimeout = -1;
//     }, 2000);
// }

/*
  e.stopPropagation() demo3
  实现效果，点击容器内的图标，图标边框变成border 1px solid red，点击空白处重置。
  note: e.stopPropagation(); 防止事件冒泡
  注意去掉stopPropagation的区别
*/
const box = document.getElementById('box');
box.onclick = function(e) {
    e.stopPropagation();
    const target = e.target;
    target.style.border = '1px solid red';
}
const doc = document;
doc.onclick = function() {
    box.style.border = 'none';
}
