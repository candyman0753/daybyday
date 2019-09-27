###数组最大值和最小值

- Math.max(val1,val2,...) 返回一组数中的最大值

  - 若任一参数不能转为数值，返回 NaN
  - 若不传入参数，返回负无穷-Infinity，Math.min()返回正无穷

- 循环对比

```js
function max(arr = []) {
  let result = arr[0];
  arr.forEach(item => {
    result = Math.max(result, item);
  });
  return result;
}
```

- eval

```js
function max(arr = []) {
  return eval("Math.max(" + arr + ")");
}
```

- Array.reduce

```js
function max(arr = []) {
  return arr.reduce((pre, current) => {
    return Math.max(pre, current);
  });
}
```

- 排序

```js
function max(arr = []) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}
```

- Es6

```js
Math.max(...arr);
```

- apply

```js
Math.max.apply(null, arr);
```
