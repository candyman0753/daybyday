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

const obj = {
  name: 'jack'
}
function sayHi(age) {
  console.log(this.name, age)
  return 'hello'
}
sayHi.apply2(obj, 18)
console.log(obj)
