/*
* js函数防抖和函数节流
* https://juejin.im/post/5b8de829f265da43623c4261
*/

//模拟一段ajax请求
function ajax(content) {
  console.log('ajax request '+ content);
}

function debounce(fun, delay) {
    return function (args) {
        let that = this
        let _args = args
        clearTimeout(fun.id)
        fun.id = setTimeout(function () {
            fun.call(that, _args)
        }, delay)
    }
}

let inputb = document.getElementById('debounce')

let debounceAjax = debounce(ajax, 1000)

inputb.addEventListener('keyup', function (e) {
        debounceAjax(e.target.value)
    })
