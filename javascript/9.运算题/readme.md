**JavaScript 运算题**

1. 代码输出
   ```js
   var b = 10;
   (function b() {
     b = 20;
     console.log(b);
   })();
   // [Function: b]
   ```
   js 解析器遇到非匿名的立即执行函数(IIFE)时，会创建一个辅助的特点对象。将函数名称作为该对象属性，故只有函数内部才可以访问到 b，但该值是只读的
