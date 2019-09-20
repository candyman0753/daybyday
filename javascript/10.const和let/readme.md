###变量声明过程

- 创建 create
- 初始化 initialize(仅一次)
- 赋值 assigned

###let 和 const

- 不存在变量提升
  本质上是创建过程存在提升，但初始化未提升，所以在变量声明前不可用，语法上叫做 TDZ
  ```js
  console.log(a); // ReferenceError
  let a = "jack";
  ```
- 暂时性死区(TDZ)
  在块级作用域内存在 let/const 命令，由它声明的变量就'绑定'在该区域，不受外界影响；本质上进入当前作用域时，所用变量就已存在，但不可获取，只有等到声明变量那一行代码出现才可以获取和使用
  ```js
  var temp = 123;
  if (true) {
    temp = "jack"; // ReferenceError
    let temp;
  }
  ```
- 不允许重复声明
  不允许在同一作用域内重复声明变量，包括同名参数
  ```js
  function func(a) {
    let a = 1; // 报错SyntaxError
  }
  function func1() {
    var b = 1;
    let b = 2; // 报错SyntaxError
  }
  ```
- 块级作用域
  外层代码块不受内层代码块影响；块级作用域内避免函数声明，如有需要请写成函数表达式

  ```js
  function f1() {
    let n = 5;
    if (true) {
      let n = 10;
      console.log(n); // 10
    }
    console.log(n); //5
    let f2 = function() {};
  }
  ```

###const

- 只读常量，一旦声明，值就不可修改；本质上只有创建和初始化过程

###var

- 创建和初始化过程都被提升到作用域顶部，故在声明前访问会返回 undefined

###function

- 创建、初始化及赋值过程都会提升

###顶层对象属性

- 使用 let/const 声明的变量将不再是顶层对象的属性，返回 undefined
  ```js
  var a = 1;
  //global.a = 1; // node环境
  window.a; // 1
  let b = 1;
  window.b; // undefined，b存在于一个块级作用中
  ```
