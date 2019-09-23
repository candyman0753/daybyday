## setTimeout、promise、Async/await 的区别

### js 是单线程、非阻塞、顺序执行代码的

**js 是单线程的，代码的解析与执行由 js 引擎线程负责，但浏览器内部是多线程的，I/O、定时器、事件监听等耗时操作由浏览器其他线程完成**

- 浏览器，多线程内核，一般常驻线程如下：

  - 渲染引擎，负责渲染页面

    ```
    webkit引擎：Chrome/Safari/Opera
    trident引擎：IE
    gecko引擎：Firfox

    由于不用引擎对相同样式的处理方式不一致，产生了浏览器样式兼容性问题
    ```

  - js 引擎，负责解析和执行 js 代码

    - 词法分析：将源代码分解为有意义的分词
    - 语法分析：用语法分析器将分词解析成语法树
    - 代码生成：生成机器能运行的代码
    - 代码执行

    ```
    v8引擎：chrome
    spiderMonkey引擎：Firefox
    JavaScriptCore引擎：Safari
    chakra引擎：IE

    为了避免混乱，渲染线程执行任务时，js引擎线程会被暂时挂起
    ```

  - 定时触发器线程，负责处理定时事件，如 setTimeout、setInterval
  - 事件触发线程，负责处理 DOM 事件
  - 异步 http 请求线程，负责处理 http 请求

- 消息队列（或叫任务队列，task Queue）和事件循环（Event Loop）

  - 消息队列由**js 引擎**负责维护，当执行栈中的所有同步任务执行完成后，**js 引擎**就会不断地去消息队列中取消息（回调），取到了就执行。
    _ps：区分**js 运行时(runtime)**，负责给 js 引擎线程发送消息，只生产消息，取消息由 **js 引擎**负责_
  - ES6 新增微任务（microtasks）队列，包含 promise，process.nextTick，mutationObserver；相应的可称原有消息队列任务为宏任务（macrotasks）队列，包含 script(整体代码)、setTimeout、setInterval、I/O、UI 交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)
  - 异步与事件，消息队列的每条消息实际对应着一个事件，如 setTimeout,addEventListener，其监听的函数就是异步回调函数，当事件触发或计时完成，表示异步任务完成，相应线程会将回调函数封装成一条消息放入消息队列
  - 事件循环指 js 引擎重复从消息队列中取消息、执行的过程。异步操作线程将准备好的消息放入消息队列，js 引擎通过事件循环去消息队列取消息，如此一个循环叫一个 tick

  ```
  在每一个tick中，js引擎只会从宏任务队里取一个消息执行，但会去微任务队列会一直提取，直至队列为空；微任务队列总会在下一个tick的宏任务执行之前被清空
  ```

- 小试牛刀

```js
async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(function() {
  console.log('setTimeout')
}, 0)
async1()
new Promise(function(resolve) {
  console.log('promise1')
  resolve()
}).then(function() {
  console.log('promise2')
})
console.log('script end')
```

```js
setTimeout(function() {
  // for (var i = 0; i < 100000000; i++) {}
  console.log('timer a') // 立即加入消息队列
}, 0)

for (var j = 0; j < 5; j++) {
  console.log(j)
}

setTimeout(function() {
  console.log('timer b') // 立即加入消息队列
}, 0)

function waitFiveSeconds() {
  var now = new Date().getTime()
  while (new Date().getTime() - now < 5000) {} // 阻塞程序5秒
  console.log('finished waiting')
}

document.addEventListener('click', function() {
  console.log('click')
})

console.log('click begin')
waitFiveSeconds()
```

- promise 实例被创建时会添加监听事件，但状态变化时(resolve/reject)才会去触发相应(then/catch 里定义的)回调；promise 中的代码会被当做同步任务立即执行，满足条件的（状态变为 resolve/reject） promise.then 或 promise.reject 才会被加入微任务队列
- async/await，await 其实是一个让出线程的标志，await 后面的表达式会先执行一遍，再将 await 下面的代码加入微任务队列中，接着跳出该 async 函数继续执行代码
- 最新的 v8 引擎执行微任务时是先进先出的
- 事件任务优先级比计时器高，所以会出现插队现象
