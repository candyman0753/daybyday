- promise 相当于一个保存未来结果的状态机，具有 pending、fulfilled、rejected 三种状态，不受外界影响，最终结果只能是 fulfilled 或 rejected，且不可逆
- promise 构造函数接收一个函数作为参数，该函数参数分别是 resolve 和 reject，这两个函数由 js 引擎提供，作用就是异步操作成功时改变 promise 状态，并把异步操作结果，作为参数传递出去
- promise 实例由(resolve/reject)监听状态变化，resolve/reject 触发后，才会执行 then/catch 里定义的回调函数，否则实例会一直处于 pending 状态
- promise 本身是同步执行的，实例一旦创建就无法取消，触发异步的是 then/catch，回调函数会被放入微任务队列

### 拓展

1. 模拟实现 Promise.finally

```js
Promise.prototype.finally2 = function(callback) {
  const promise = this.constructor;
  return this.then(
    value => promise.resolve(callback()).then(() => value),
    err => promise.resolve(callback()).then(() => throw err)
  );
};
```

2. 模拟实现 Promise.all

- 接受一个数组作为参数，数组元素都是 promise 实例，假如不是会调用 Promise.resolve 转换
  ```js
  const p = Promise.all([p1, p2, p3, ...]);
  ```
- Promise.all 的状态由数组元素状态决定，只有所有元素状态变为 fulfilled，Promise.all 才会变成 fulfill；只要有其中一个元素状态变成 rejected，Promise.all 的状态就变成 rejected
- 若 p1 元素定义了 catch 方法的话，当 p1 状态变成 rejected 时，会被 p1 的 catch 捕获，并返回一个新的 Promise 实例，导致 p1 状态变成了 resolved，导致 Promise.all 的状态也变成 resolved 了；正确处理是子元素不定义 catch 回调，统一交给 Promise.all 处理
  ```js
  const p1 = new Promise((resolve, reject) => {
    reject("p1");
  }).catch(err => err); // rejected状态被子元素捕获
  const p2 = new Promise((resolve, reject) => {
    resolve("p2");
  }).then(res => res);
  Promise.all([p1, p2])
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  ```
- 模拟实现

```js
function promiseAll(arr = []) {
  return new Promise((resolve, reject) => {
    const result = [],
      len = arr.length;
    arr.forEach(item => {
      Promise.resolve(item).then(
        res => {
          result.push(res);
          if (result.length === len) {
            resolve(result);
          }
        },
        err => {
          reject(err);
        }
      );
    });
  });
}
```

3. 模拟实现 Promise.race()

- 使用方法同 Promise.all，只要数组元素中有一个实例率先改变了状态，Promise.race 的状态就跟着改变

```js
function promiseRace(arr = []) {
  return new Promise((resolve, reject) => {
    arr.forEach(item => {
      Promise.resolve(item).then(resolve, reject);
    });
  });
}
```
