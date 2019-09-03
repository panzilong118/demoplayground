/*
* 理解 JavaScript 的 async/await
* https://segmentfault.com/a/1190000007535316
*/

// async 起什么作用
// async function testAsync() {
//     return "hello async";
// }

// const result = testAsync();
// console.log(result);
// testAsync().then(v => {
//     console.log(v);    // 输出 hello async
// });

// await 到底在等啥
// function getSomething() {
//     return "something";
// }
//
// async function testAsync() {
//     return Promise.resolve("hello async");
// }
//
// async function test() {
//     const v1 = await getSomething();
//     const v2 = await testAsync();
//     console.log(v1, v2);
// }
//
// test();

// 作个简单的比较
// function takeLongTime() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("long_time_value"), 1000);
//     });
// }
//
// takeLongTime().then(v => {
//     console.log("got", v);
// });

// function takeLongTime() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("long_time_value"), 1000);
//     });
// }
//
// async function test() {
//     const v = await takeLongTime();
//     console.log(v);
// }
//
// test();

// async/await 的优势在于处理 then 链
/**
 * 传入参数 n，表示这个函数执行的时间（毫秒）
 * 执行的结果是 n + 200，这个值将用于下一步骤
 */
function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

// function step1(n) {
//     console.log(`step1 with ${n}`);
//     return takeLongTime(n);
// }
//
// function step2(n) {
//     console.log(`step2 with ${n}`);
//     return takeLongTime(n);
// }
//
// function step3(n) {
//     console.log(`step3 with ${n}`);
//     return takeLongTime(n);
// }

// function doIt() {
//     console.time("doIt");
//     const time1 = 300;
//     step1(time1)
//         .then(time2 => step2(time2))
//         .then(time3 => step3(time3))
//         .then(result => {
//             console.log(`result is ${result}`);
//             console.timeEnd("doIt");
//         });
// }
//
// doIt();

// c:\var\test>node --harmony_async_await .
// step1 with 300
// step2 with 500
// step3 with 700
// result is 900
// doIt: 1507.251ms

// async function doIt() {
//     console.time("doIt");
//     const time1 = 300;
//     const time2 = await step1(time1);
//     const time3 = await step2(time2);
//     const result = await step3(time3);
//     console.log(`result is ${result}`);
//     console.timeEnd("doIt");
// }
//
// doIt();

// 还有更酷的 - 那一堆参数处理，就是 Promise 方案的死穴—— 参数传递太麻烦了
function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(m, n) {
    console.log(`step2 with ${m} and ${n}`);
    return takeLongTime(m + n);
}

function step3(k, m, n) {
    console.log(`step3 with ${k}, ${m} and ${n}`);
    return takeLongTime(k + m + n);
}

// async function doIt() {
//     console.time("doIt");
//     const time1 = 300;
//     const time2 = await step1(time1);
//     const time3 = await step2(time1, time2);
//     const result = await step3(time1, time2, time3);
//     console.log(`result is ${result}`);
//     console.timeEnd("doIt");
// }
//
// doIt();

function doIt() {
    console.time("doIt");
    const time1 = 300;
    step1(time1)
        .then(time2 => {
            return step2(time1, time2)
                .then(time3 => [time1, time2, time3]);
        })
        .then(times => {
            const [time1, time2, time3] = times;
            return step3(time1, time2, time3);
        })
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd("doIt");
        });
}

doIt();

/*
* Promise 有可能 reject 啊，怎么处理呢？如果需要并行处理3个步骤，再等待所有结果，又该怎么处理呢？
* await 命令后面的 Promise 对象，运行结果可能是 rejected，
* 所以最好把 await 命令放在 try...catch 代码块中。
* async 函数的含义和用法 - 阮一峰
* http://www.ruanyifeng.com/blog/2015/05/async.html
*/
async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}

// 另一种写法
async function myFunction() {
  await somethingThatReturnsAPromise().catch(function (err){
    console.log(err);
  });
}
