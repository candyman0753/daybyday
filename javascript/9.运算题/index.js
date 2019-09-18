/** 1.*/
function code_1() {
  var b = 10;
  (function b() {
    b = 20;
    console.log(b);
  })();
}
/**2.*/
function code_2() {
  var a = { n: 1 };
  var b = a;
  var c = a;
  a.x = a = { n: 2 };
  console.log(a.x);
  console.log(b.x);
  console.log(c);
}
/**3. */
function code_3() {
  // example 1
  var a = {},
    b = "123",
    c = 123;
  a[b] = "b";
  a[c] = "c";
  console.log(a[b]); // 'c'

  // example 2
  var a = {},
    b = Symbol("123"),
    c = Symbol("123");
  a[b] = "b";
  a[c] = "c";
  console.log(a[b]); // 'b'

  // example 3
  var a = {},
    b = { key: "123" },
    c = { key: "456" };
  a[b] = "b";
  a[c] = "c"; // key.toString() >>> a['[object Object]']
  console.log(a[b]); // 'c'
  console.log(a);
}
