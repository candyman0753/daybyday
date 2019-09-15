**伪数组**
具有数字索引属性和 length 属性，但不具备数组方法的对象

```js
const arrLike = {
  '0': 1,
  '2': 'jack',
  length: 2
}
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
  }
  console.log(arrLike)
  // Object [empty, splice: ƒ]
  ```
