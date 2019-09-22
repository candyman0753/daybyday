### setTimeout,promise,Async/await 的区别

- setTimeout
- promise
  本身是立即执行函数，但 js 引擎执行 resolve/reject 时，会将其放入异步队列（微任务），
