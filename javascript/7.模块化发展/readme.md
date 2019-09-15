模块化主要用于抽离公共代码，隔离作用域，避免变量冲突等

- IIFE：自执行函数，在单独函数作用域中执行代码，避免变量冲突
  ```js
  (function() {
    var a = "IIFE";
  })();
  ```
- AMD：使用 requireJS，需提前声明依赖
  ```js
  define(["./module1", "./module2"], function(code1, code2) {
    // code1、code2是对应模块module1和module2
  });
  ```
- CMD：使用 seaJS，支持动态引入依赖
  ```js
  define(function(require, exports, module){
    var indexCode = require('./index.js)
  })
  ```
- CommonJS：nodeJS 自带的模块化
  ```js
  var fs = require("fs");
  ```
- UMD：兼容 AMD 和 CMD 的模块语法
- ES Modules：ES6 模块化，使用 import 引入
  ```js
  // a.js
  var a = "jack";
  export default a;
  // b.js
  import a from "a.js";
  ```
- webpack(require.ensure)：代码分割
