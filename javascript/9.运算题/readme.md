**JavaScript 计算题**

1. 代码输出
   ```js
   var b = 10
   ;(function b() {
     b = 20
     console.log(b)
   })()
   // [Function: b]
   ```
   js 解析器遇到非匿名的立即执行函数(IIFE)时，会创建一个辅助的特点对象。将函数名称作为该对象属性，故只有函数内部才可以访问到 b，但该值是只读的
2. 代码输出
   ```js
   var a = { n: 1 }
   var b = a
   a.x = a = { n: 2 }
   console.log(a.x) // undefined
   console.log(b.x) // {n: 2}
   ```

- 点运算符优先级高于赋值运算符，`a.x = a = { n: 2 }`其实先进行的 a.x 的运算，找到{n:1}对象，由于不存在 x 属性，则顺便添加上，之后再从右到左执行赋值操作
- 变量存放
  - 基本类型，保存在栈内存中，共 6 种：undefined,null,boolean,number,string,symbol
  - 引用类型，保存在堆内存中，内存指针保存在栈内存中，读取变量时，先从栈内存中读取内存地址，再通过地址找到堆中的值
