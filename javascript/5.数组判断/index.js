function typeCheck(arg) {
  const result = Object.prototype.toString.call(arg)
  console.log(result)
  return result
}
typeCheck('jack')
typeCheck(1)
typeCheck(null)
typeCheck(undefined)
typeCheck(true)
typeCheck(Symbol(1))
typeCheck(function() {})
typeCheck({})
typeCheck([])

console.log([] instanceof Array)
console.log([] instanceof Object)
console.log(1 instanceof Number)
console.log(function() {} instanceof Function)

console.log(Array.isArray([]))
console.log(Array.isArray(1))
