/** 1.*/
function code_1() {
  var b = 10
  ;(function b() {
    b = 20
    console.log(b)
  })()
}
/**2.*/
function code_2() {
  var a = { n: 1 }
  var b = a
  var c = a
  a.x = a = { n: 2 }
  console.log(a.x)
  console.log(b.x)
  console.log(c)
}
