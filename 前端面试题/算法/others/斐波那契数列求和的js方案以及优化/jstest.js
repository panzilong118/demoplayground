/*
	斐波那契数列求和的js方案以及优化
	https://segmentfault.com/a/1190000007115162
	https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97
*/

// function fibonacci(n) {
//     if(n==0 || n == 1)
//         return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// const res = fibonacci(5);
// console.log(res);

/*
	以上函数使用递归的方式进行斐波那契数列求和，但效率十分低，很多值会重复求值。题目要求使用 memoization方案进行优化。
	思路
	memoization方案在《JavaScript模式》和《JavaScript设计模式》都有提到。
	memoization是一种将函数执行结果用变量缓存起来的方法。当函数进行计算之前，
	先看缓存对象中是否有次计算结果，如果有，就直接从缓存对象中获取结果；
	如果没有，就进行计算，并将结果保存到缓存对象中。
*/

let fibonacci = (function() {
  let memory = {};
  return function(n) {
      if(memory[n] !== undefined) {
        return memory[n]
    }
    return memory[n] = (n === 0 || n === 1) ? n : fibonacci(n-1) + fibonacci(n-2)
  }
})()
const res = fibonacci(6);
console.log(res);
