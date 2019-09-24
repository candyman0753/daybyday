- promise 相当于一个保存未来结果的状态机，具有 pending、fulfilled、rejected 三种状态，不受外界影响，最终结果只能是 fulfilled 或 rejected，且不可逆
- promise 实例由(resolve/reject)事件监听状态变化，resolve/reject 事件触发后，才会执行 then/catch 里定义的回调函数，否则实例会一直处于 pending 状态
- promise 本身是同步执行的，实例一旦创建就无法取消，触发异步的是 then/catch，回调函数会被放入微任务队列

### 拓展

1. 模拟实现 Promise.finally

```js
Promise.prototype.finally2 = function(callback) {
  const promise = this.constructor;
  return this.then(
    value => {
      promise.resolve(callback()).then(() => value);
    },
    err => {
      promise.resolve(callback()).then(() => throw err);
    }
  );
};
```
