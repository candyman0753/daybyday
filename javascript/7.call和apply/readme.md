**call 和 apply**

- 都可以通过传入首个参数来指定函数的 this 指向
- 第二个参数开始是传给函数的参数，call 可传入参数不定，apply 只能传入一个数组或类数组
- call 比 apply 的性能要好
- call 的实现
  ```js
  Function.prototype.call2 = function(context = global) {
    context.func = this
    const args = []
    for (let i = 1; i < arguments.length; i++) {
      args.push(`arguments[${i}]`)
    }
    const result = eval('context.func(' + args + ')')
    delete context.func
    return result
  }
  ```
- apply 的实现
  ```js
  Function.prototype.apply2 = function(context = global, arrLike = []) {
    context.func = this
    if (!Array.isArray(arrLike)) {
      throw new Error('arguments is not a arrayLike')
    }
    const args = []
    for (let i = 0; i < arrLike.length; i++) {
      args.push(`arrLike[${i}]`)
    }
    const result = eval('context.func(' + args + ')')
    delete context.func
    return result
  }
  ```
