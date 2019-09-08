/*
* Promise实现原理（附源码）
* https://juejin.im/post/5b83cb5ae51d4538cc3ec354
*/

// 定义Promise的三种状态常量
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
// 判断变量否为function
const isFunction = variable => typeof variable === 'function'

class MyPromise {
  constructor (handle) {
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter')
    }
    // 添加状态
    this._status = PENDING
    // 添加值
    this._value = undefined
    // 添加成功回调函数队列
    this._fulfilledQueues = []
    // 添加失败回调函数队列
    this._rejectedQueues = []
    // 执行handle
    try {
      handle(this._resolve.bind(this), this._reject.bind(this))
    } catch (err) {
      this._reject(err)
    }
  }
  // 添加resovle时执行的函数
  _resolve (val) {
    const run = () => {
      if (this._status !== PENDING) return
      // 依次执行成功队列中的函数，并清空队列
      const runFulfilled = (value) => {
        let cb;
        while (cb = this._fulfilledQueues.shift()) {
          cb(value)
        }
      }
      // 依次执行失败队列中的函数，并清空队列
      const runRejected = (error) => {
        let cb;
        while (cb = this._rejectedQueues.shift()) {
          cb(error)
        }
      }
      /* 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
        当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
      */
      if (val instanceof MyPromise) {
        val.then(value => {
          this._value = value
          this._status = FULFILLED
          runFulfilled(value)
        }, err => {
          this._value = err
          this._status = REJECTED
          runRejected(err)
        })
      } else {
        this._value = val
        this._status = FULFILLED
        runFulfilled(val)
      }
    }
    // 为了支持同步的Promise，这里采用异步调用
    setTimeout(run, 0)
  }
  // 添加reject时执行的函数
  _reject (err) {
    if (this._status !== PENDING) return
    // 依次执行失败队列中的函数，并清空队列
    const run = () => {
     this._status = REJECTED
     this._value = err
     let cb;
     while (cb = this._rejectedQueues.shift()) {
       cb(err)
     }
    }
    // 为了支持同步的Promise，这里采用异步调用
    setTimeout(run, 0)
  }
  // 添加then方法
  then (onFulfilled, onRejected) {
    const { _value, _status } = this
    // 返回一个新的Promise对象
    return new MyPromise((onFulfilledNext, onRejectedNext) => {
      // 封装一个成功时执行的函数
      let fulfilled = value => {
        try {
          if (!isFunction(onFulfilled)) {
            onFulfilledNext(value)
          } else {
            let res =  onFulfilled(value);
            if (res instanceof MyPromise) {
              // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res)
            }
          }
        } catch (err) {
          // 如果函数执行出错，新的Promise对象的状态为失败
          onRejectedNext(err)
        }
      }
      // 封装一个失败时执行的函数
      let rejected = error => {
        try {
          if (!isFunction(onRejected)) {
            onRejectedNext(error)
          } else {
              let res = onRejected(error);
              if (res instanceof MyPromise) {
                // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                res.then(onFulfilledNext, onRejectedNext)
              } else {
                //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                onFulfilledNext(res)
              }
          }
        } catch (err) {
          // 如果函数执行出错，新的Promise对象的状态为失败
          onRejectedNext(err)
        }
      }
      switch (_status) {
        // 当状态为pending时，将then方法回调函数加入执行队列等待执行
        case PENDING:
          this._fulfilledQueues.push(fulfilled)
          this._rejectedQueues.push(rejected)
          break
        // 当状态已经改变时，立即执行对应的回调函数
        case FULFILLED:
          fulfilled(_value)
          break
        case REJECTED:
          rejected(_value)
          break
      }
    })
  }
  // 添加静态all方法
  static all (list) {
    return new MyPromise((resolve, reject) => {
      /**
       * 返回值的集合
       */
      let values = []
      let count = 0
      for (let [i, p] of list.entries()) {
        // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
        this.resolve(p).then(res => {
        // p.then(res => { // 成功
          values[i] = res
          count++
          // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
          if (count === list.length) resolve(values)
        }, err => {
          // 有一个被rejected时返回的MyPromise状态就变成rejected
          reject(err)
        })
      }
    })
  }
  // 添加静态resolve方法
  static resolve (value) {
    // 如果参数是MyPromise实例，直接返回这个实例
    if (value instanceof MyPromise) return value
    return new MyPromise(resolve => resolve(value))
  }
}

// 1如果 onFulfilled 或者 onRejected 返回一个值 x ，
// 则运行下面的 Promise 解决过程：[[Resolve]](promise2, x)
// 1.1
// let promise1 = new MyPromise((resolve, reject) => { // Promise | MyPromise
//   setTimeout(() => {
//     resolve(1)
//   }, 1000)
// })
// promise2 = promise1.then(res => {
//   console.log(res);
//   // 返回一个普通值
//   return '这里返回一个普通值'
// })
// promise2.then(res => {
//   // 若 x 不为 Promise ，则使 x 直接作为新返回的 Promise 对象的值，
//   // 即新的onFulfilled 或者 onRejected 函数的参数.
//   console.log(res) //1秒后打印出：这里返回一个普通值
// })

// 1.2
// let promise1 = new MyPromise((resolve, reject) => { // Promise | MyPromise
//   setTimeout(() => {
//     resolve(1)
//   }, 1000)
// })
// promise2 = promise1.then(res => {
//   console.log(res); // 1秒后打印 1
//   // 返回一个Promise对象
//   return new MyPromise((resolve, reject) => { // Promise | MyPromise
//     setTimeout(() => {
//      resolve('这里返回一个Promise')
//     }, 2000)
//   })
// })
// promise2.then(res => {
//   // 若 x 为 Promise ，这时后一个回调函数，就会等待该 Promise 对象(即 x )的状态发生变化，
//   // 才会被调用，并且新的 Promise 状态和 x 的状态相同。 // TODO: 如何理解？
//   console.log(res) //3秒后打印出：这里返回一个Promise
// })

// 2、如果 onFulfilled 或者onRejected 抛出一个异常 e ，
// 则 promise2 必须变为失败（Rejected），并返回失败的值 e，例如：
// let promise1 = new MyPromise((resolve, reject) => { // Promise | MyPromise
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// promise2 = promise1.then(res => {
//   console.log(res);
//   throw new Error('这里抛出一个异常e')
// })
// promise2.then(res => {
//   console.log(res)
// }, err => {
//   console.log(err) //1秒后打印出：这里抛出一个异常e
// })

// 3、如果onFulfilled 不是函数且 promise1 状态为成功（Fulfilled），
// promise2 必须变为成功（Fulfilled）并返回 promise1 成功的值，例如：
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// promise2 = promise1.then('这里的onFulfilled本来是一个函数，但现在不是')
// promise2.then(res => {
//   console.log(res) // 1秒后打印出：success
// }, err => {
//   console.log(err)
// })

// 4.如果 onRejected 不是函数且 promise1 状态为失败（Rejected），
// promise2必须变为失败（Rejected） 并返回 promise1 失败的值，例如：
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('fail')
//   }, 1000)
// })
// promise2 = promise1.then(res => res, '这里的onRejected本来是一个函数，但现在不是')
// promise2.then(res => {
//   console.log(res)
// }, err => {
//   console.log(err)  // 1秒后打印出：fail
// })

// MyPromise.all()
let p1 = new MyPromise((resolve, reject) => { // Promise | MyPromise
  setTimeout(() => {
    resolve('success1')
  }, 1000)
})
let p2 = new MyPromise((resolve, reject) => { // Promise | MyPromise
  setTimeout(() => {
    resolve('success2')
  }, 3000)
})
MyPromise.all([p1, p2]).then(function (posts) { // Promise | MyPromise
  console.log(posts);
})
