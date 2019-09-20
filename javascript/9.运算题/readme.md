**JavaScript 计算题**

1. 自执行函数 IIFE
   ```js
   var b = 10;
   (function b() {
     b = 20;
     console.log(b);
   })();
   // [Function: b]
   ```
   js 解析器遇到非匿名的立即执行函数(IIFE)时，会创建一个辅助的特点对象。将函数名称作为该对象属性，故只有函数内部才可以访问到 b，但该值是只读的
2. 对象引用
   ```js
   var a = { n: 1 };
   var b = a;
   a.x = a = { n: 2 };
   console.log(a.x); // undefined
   console.log(b.x); // {n: 2}
   ```

- 点运算符优先级高于赋值运算符，`a.x = a = { n: 2 }`其实先进行的 a.x 的运算，找到{n:1}对象，由于不存在 x 属性，则顺便添加上，之后再从右到左执行赋值操作
- 变量存放
  - 原始类型，保存在栈内存中，共 6 种：undefined,null,boolean,number,string,symbol
  - 引用类型，保存在堆内存中，内存指针保存在栈内存中，读取变量时，先从栈内存中读取内存地址，再通过地址找到堆中的值

3. 对象 key

   ```js
   // example 1
   var a = {},
     b = "123",
     c = 123;
   a[b] = "b";
   a[c] = "c";
   console.log(a[b]); // 'c'

   // example 2
   var a = {},
     b = Symbol("123"),
     c = Symbol("123");
   a[b] = "b";
   a[c] = "c";
   console.log(a[b]); // 'b'

   // example 3**
   var a = {},
     b = { key: "123" },
     c = { key: "456" };
   a[b] = "b"; // [object Object]
   a[c] = "c";
   console.log(a[b]); // 'c'
   ```

   - 对象的键名必须是字符串或 Symbol 类型
   - 其他类型的键名会被转成字符串
   - 对象转字符串默认调用 toString 方法

4. 函数传参

   ```js
   function changeObjProperty(o) {
     o.siteUrl = "http://www.baidu.com";
     o = new Object();
     o.siteUrl = "http://www.google.com";
   }
   let webSite = new Object();
   changeObjProperty(webSite);
   console.log(webSite.siteUrl); // "http://www.baidu.com"
   ```

   - 函数传参是按值传递的
   - 实参为复杂类型数据时，传递的是其内存指针

5. 函数作用域
   ```js
   // Foo类
   function Foo() {
     Foo.a = function() {
       console.log(1);
     };
     this.a = function() {
       console.log(2);
     };
   }
   // 在Foo原型上挂载方法a，log(3)
   Foo.prototype.a = function() {
     console.log(3);
   };
   // 在当前Foo上挂载方法a，log(4)
   Foo.a = function() {
     console.log(4);
   };
   // 执行Foo.a()，在当前Foo作用域内可以找到上面刚刚定义的a，执行输出4
   Foo.a();
   // 实例化Foo类，执行Foo.a时修改a方法为log(1)、执行this.a方法为为实例添加a方法log(2)
   let obj = new Foo();
   obj.a(); // this指向obj，输出2
   Foo.a(); // Foo当前作用域存在a，不需要到上级原型查找，输出1
   ```
6. 等于操作符
   ```js
   String("11") == new String("11"); // true
   String("11") === new String("11"); // false
   ```
   - String()返回的是字符串，new String()返回的是对象
   - `===` 恒等于、严格等于
     - 不进行任何类型转换，计算操作数的值后直接比较；
     - 两者类型不同，则不相等
     - `NaN !== NaN`、`null !== undefined`
     - 两者引用值指向同一对象、数组或函数，则两者相等
   - `==` 等于
     - 两者类型相同时，进行严格等于比较；类型不相同时先转成相同类型再比较
     - `null == undefined`
     - 数字和字符串比较时，先将字符串转数字再比较
     - 存在布尔值时，先将布尔值转为数字，`true->1/false->0`
     - 一个是对象，另一个是数字或字符串时，先调用 valueof 或 toString 方法将对象转为原始值后再比较
7. 变量提升及函数作用域
   ```js
   var name = "Tom";
   (function() {
     if (typeof name == "undefined") {
       var name = "Jack";
       console.log("Goodbye " + name);
     } else {
       console.log("Hello " + name);
     }
   })();
   // Goodbye Jack
   ```
   - 变量提升角度：自执行函数作用域内的 name 声明存在变量提升至函数顶部，初始化为 undefined
   - 作用域角度：
     ```js
     // 伪代码
     //全局上下文
     var globalContext = {
       VO:{
         name: undefined
       },
       Scope: globalContext.VO,
       this: globalContext.VO,
     }
     // 创建自执行函数上下文
     var IIFEContext;
     // 保存作用域链到内部属性scope
     IIFEContext.[[scope]] = [globalContext.VO]
     // 复制scope属性创建作用域链，利用arguments对象初始化AO，并压入作用域链顶部
     IIFEContext = {
      AO: {
        arguments:{
          length:0
        },
        name: undefined
      },
      Scope: [AO, globalContext.VO],
      this: undefined
     }
     // 函数执行，在IIFEContext的作用域中找到name = undefined，输出结果
     // IIFEContext弹出上下文栈
     ```
8. 拓展题 7，变量提升及函数作用域
   ```js
   var name = "Tom";
   (function() {
     if (typeof name == "undefined") {
       name = "Jack";
       console.log("Goodbye " + name);
     } else {
       console.log("Hello " + name);
     }
   })();
   // Hello Tom
   ```
9. 运算符

   ```js
   1 + "1"; // 11
   2 * "2"; // 4
   [1, 2] + [2, 1]; // 1,22,1 先调用valueOf
   "a" + +"b"; // aNaN
   ```

- 强制类型转换，借助构造函数
  - Number(x)：将目标转为数字，非数字返回 NaN
  - Boolean(x)：将目标转为布尔，除了 null、undefined、NaN、false、0、-0、''，其余都为 true
  - String(x): 将目标转为字符串
- 隐式类型转换

  1. 四则运算

     - `+`是双目运算符，只要存在 String 类型，表达式的值就是 String
     - 其他四则运算，只要存在 Number 类型，表达式的值就是 Number
     - 非法字符返回 NaN

  2. 单元操作
     - `+a`或`-a`，将 a 转为数字，非数字类型返回 NaN
     - `!a`，将 a 转为布尔值

- 对象转原始类型
  - 先调用内置 ToPrimitive 函数，若返回原始类型则不再转换
  - 若需要转为字符串则调用 obj.toString()，结果为原始类型的话就返回
  - 若需要转为非字符串则先调用 valueOf，若结果不是原始类型则再调用 obj.toString()
  - 若都没有返回原始类型则报错

10. 异步运算

```js
function wait() {
  return new Promise(resolve => setTimeout(resolve, 10 * 1000));
}

async function main() {
  console.time();
  const x = wait();
  const y = wait();
  const z = wait();
  await x;
  await y;
  await z;
  console.timeEnd(); // 10s多
}
main();
```

- new Promise()相当于同步任务，会立即执行，then 后面相当于微任务

```js
function wait() {
  return new Promise(resolve => setTimeout(resolve, 10 * 1000));
}

async function main() {
  console.time();
  await = wait();
  await = wait();
  await = wait();
  console.timeEnd(); // 30s多
}
main();
```
