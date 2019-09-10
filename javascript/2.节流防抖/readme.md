**防抖**
触发高频事件后 N 秒内函数只会执行一次。如果 N 秒内高频事件再次触发，则重新计算时间

```js
function debounce(callBack = () => {}, wait = 3000, immediate = true) {
  let timer = null,
    result;
  let _debounce = function() {
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      const callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) {
        result = callBack.apply(this, arguments);
      }
    } else {
      timer = setTimeout(() => {
        callBack.apply(this, arguments);
      }, wait);
    }
    return result;
  };
  _debounce.cancel = function() {
    clearTimeout(timer);
    timer = null;
  };
}
```

**节流**
高频事件在 N 秒内只执行一次，即稀释函数执行频率

```js
// 立即执行版
function throttle(callBack, wait = 3000) {
  let preTime = 0;
  return function() {
    const currentTime = Date.now();
    if (currentTime - preTime > wait) {
      callBack.apply(this, arguments);
      preTime = Date.now();
    }
  };
}
// 延迟N秒执行
function throttleDelay(callBack, wait = 3000) {
  let timer;
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        callBack.apply(this, arguments);
        timer = null;
      }, wait);
    }
  };
}
```
