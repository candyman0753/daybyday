**伪数组**
具有数字索引属性和 length 属性，但不具备数组方法的对象

```js
const arrLike = {
  "0": 1,
  "2": "jack",
  length: 2
};
```

- `Array.prototype.push(item1, ...itemN)`
  - 与 call 或 apply 搭配使用时，可根据类数组的 length 属性决定插入起点
  - 当 length 不可转成一个数值，插入索引从 0 开始
  - 当 length 不存在时，会自动创建他，索引从 0 开始
  - 原生类数组 String 不适用
- `Array.prototype.splice(start, deleteCount, item...)`
  - 从 start 位置起，删除 deleteCount 个元素，再插入 item
- 一个对象同时出现值为数值的 length 属性和值为函数的 splice 属性时，客户端会将其识别为类数组
  ```js
  const arrLike = {
    length: 1,
    splice: function() {}
  };
  console.log(arrLike);
  // Object [empty, splice: ƒ]
  ```

**类数组检测**

- 类数组至少满足以下三个条件之一
  - 数组
  - 长度为 0
  - lengths 属性是大于 0 的数字类型，且`obj[length-1]`必须存在

```js
function isArrayLike(obj) {
  //必须有length属性
  const length = !!obj && "length" in obj && obj.length;
  // 结合类型判断
  const objType = typeCheck(obj);
  // 排除函数和window
  if (objType === "function" || isWindow(obj)) {
    return false;
  }
  return (
    objType === "array" ||
    length === 0 ||
    (typeof length === "number" && length > 0 && length - 1 in obj)
  );
  // length为0；如 Arguments对象
  // length为数字，且最后一个元素
}
```
