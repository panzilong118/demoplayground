/*
* Promise实现原理（附源码） - todo
* https://juejin.im/post/5b83cb5ae51d4538cc3ec354
*/

class MyPromise {
  constructor (handle) {
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter')
    }
    // 添加状态
    this._status = PENDING
    // 添加状态
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
    if (this._status !== PENDING) return
    this._status = FULFILLED
    this._value = val
  }
  // 添加reject时执行的函数
  _reject (err) {
    if (this._status !== PENDING) return
    this._status = REJECTED
    this._value = err
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
}

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 1000)
// })
// promise2 = promise1.then(res => {
//   // 返回一个普通值
//   return '这里返回一个普通值'
// })
// promise2.then(res => {
//   // 若 x 不为 Promise ，则使 x 直接作为新返回的 Promise 对象的值，
//   // 即新的onFulfilled 或者 onRejected 函数的参数.
//   console.log(res) //1秒后打印出：这里返回一个普通值
// })
//
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 1000)
// })
// promise2 = promise1.then(res => {
//   // 返回一个Promise对象
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//      resolve('这里返回一个Promise')
//     }, 2000)
//   })
// })
// promise2.then(res => {
//   // 若 x 为 Promise ，这时后一个回调函数，就会等待该 Promise 对象(即 x )的状态发生变化，
//   // 才会被调用，并且新的 Promise 状态和 x 的状态相同。
//   console.log(res) //3秒后打印出：这里返回一个Promise
// })

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// promise2 = promise1.then(res => {
//   throw new Error('这里抛出一个异常e')
// })
// promise2.then(res => {
//   console.log(res)
// }, err => {
//   console.log(err) //1秒后打印出：这里抛出一个异常e
// })

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
