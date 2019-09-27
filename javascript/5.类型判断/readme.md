**typeof**

- 属于一元操作符，返回值表示操作类型的字符串
- 可准确检测的类型有 Undefined、Boolean、Number、String、Function、Symbol
- null、对象类型(Array、Date、RegExp、Error 等)都会返回 object

**Object.prototype.toString**

- 内部执行步骤
  ```
  1.若this值为undefined，返回 [object Undefined]
  2.若this值为null，返回 [object Null]
  3.获取执行ToObject的结果: let O = ToObject(this)
  4.获取O的内部属性[[Class]]: let class = O.[[Class]]
  5.拼接字符串返回'[object' + class + ']'
  ```
- 几乎所有数据类型都能判断，兼容性好
  6 类基本类型(Number、String、Boolean、Undefined、Null、Symbol)，6 类对象类型(Object、Array、Date、Error、RegExp、Function)，2 类内置函数(Math、JSON)，arguments 对象等

```js
const typeClass = {};
"Boolean Number String Function Array Date RegExp Object Error Null Undefined Arguments"
  .split(" ")
  .forEach(item => {
    typeClass[`[object ${item}]`] = item.toLowerCase();
  });

function typeCheck(arg) {
  const temp = typeof arg;
  return temp === "object" || temp === "function"
    ? typeClass[Object.prototype.toString.call(arg)] || "object"
    : temp;
}
```

**instanceof**

- 内部机制是通过判断对象的原型链中能否找到类型 prototype
- 只能用于判断对象类型，原始类型不行
- 所有对象类型 instanceof Object 都为 true

**Array.isArray(target)**

- 检测 Array 实例时优先 instanceof，还可以检测出 iframes
- ES5 新增，不存在该方法时需要用 Object.prototype.toString 实现

**plainObject**

- 纯粹的对象，通过 {} 或 new Object 创建的，含有 0 或多个键值对

**EmptyObject**

- 空对象，首先判断目标是否为对象
  ```js
  function isEmptyObject(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  ```
  **window 对象**
  ```js
  function isWindow(obj) {
    return obj !== null && obj === obj.window;
  }
  ```

**isElement**

```js
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}
// &&结果为真返回右边，结果为假返回左边
```
