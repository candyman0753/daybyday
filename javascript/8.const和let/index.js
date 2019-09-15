/**变量不提升 */
// console.log(a); // 报错ReferenceError a is not defined
// let a = "jack";

// var temp = 123;
// if (true) {
//   temp = "jack"; // ReferenceError
//   let temp;
// }

/**不能重复声明 */
function func(a) {
  let a = 1; // 报错
}
function func1() {
  var b = 1;
  let b = 2; // 报错
}

/**块级作用域 */
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
    console.log(n); // 10
  }
  console.log(n); //5
}

// 代替匿名函数
{
  let temp = 1;
}
// console.log(temp); //ReferenceError

// 块级作用域函数声明
function f() {
  console.log("outside");
}
(function() {
  if (false) {
    function f() {
      console.log("inside");
    }
  }
  // f(); // TypeError: f is not a function
})();
// 等价于
(function() {
  let f;
  if (false) {
    function f() {
      console.log("inside");
    }
  }
  // f();
})();

global.a = 1;
console.log(global.a); // 1
let b = 1;
console.log(global.b); // undefined
