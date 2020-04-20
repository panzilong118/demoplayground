/*
 * 白话解释 Javascript事件preventDefault,stopPropagation及return false的区别
 * https://segmentfault.com/a/1190000008227026
 */

// 使用事件捕获模式注册事件监听
var outerElement = document.getElementById('outerMost');
var middleElement = document.getElementById('middle');
var innerElement = document.getElementById('innerMost');

outerElement.addEventListener('click', function () {
    console.log('trigger outermost div');
}, false);
middleElement.addEventListener('click', function () {
    console.log('trigger middle div');
}, false);
innerElement.addEventListener('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
    console.log('trigger innermost button');
}, false);
