1. 链表
   - 一种线性表，每个节点里存着下一个节点的指针，插入节点复杂度为 O(1)，查找节点复杂度为 O(n)
   - 无需预分配内存
   - 插入/删除节点不影响其他节点，效率高
2. 迭代器(Iterator)
   - 对象可迭代需具有 Symbol.iterator 属性，该属性返回一个符合迭代器协议的对象
   - 满足以下条件的对象可认为是个迭代器
     实现一个 next 方法，该方法返回一个对象，且包含以下两个必要属性
     - done：当迭代器达到最大迭代次数返回 true，否则返回 false
     - value：由迭代器返回的值，done 为 true 可忽略
   ```js
   const iteratorMake = arr => {
     let index = 0;
     return {
       next: () => {
         index >= arr.length
           ? { value: undefined, done: true }
           : { value: arr[index++], done: false };
       }
     };
   };
   ```
3. 生成器对象 Generator
   - 由生成器函数返回，既是迭代器也是可迭代对象，可以调用 next 方法
   - next 方法会移动内部状态指针，从函数头部或上一次停止的地方开始，直到遇到下一个 yield 表达式或 return 语句，返回一个对象，其中 value 值为 yield 后面的值（若有）
   ```js
   // *标记为 Generator函数
   function* firstStep() {
     yield "挖坑"; // yield定义内部状态
   }
   function* plant() {
     yield* firstStep();
     const tree = yield;
     const result = yield tree;
     yield result;
   }
   const plantTree = plant();
   plantTree.next(); //调用next方法移动状态指针
   ```
4. async/await
   - 其实是 Generator 的语法糖，async 代替\*，await 代替 yield
   - await 后面必须是 promise 对象，否则同步执行
