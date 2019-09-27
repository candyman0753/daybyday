const typeClass = {};
"Boolean Number String Function Array Date RegExp Object Error Null Undefined Arguments"
  .split(" ")
  .forEach(item => {
    typeClass[`[object ${item}]`] = item.toLowerCase();
  });

function typeCheck(arg) {
  const temp = typeof arg;
  return temp === "object" || temp === "function"
    ? typeClass[Object.prototype.toString.call(arg)] || "object"
    : temp;
}
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}
function isWindow(obj) {
  return obj !== null && obj === obj.window;
}
// console.log(0 && 9);
// console.log(6 && 0);
// console.log(undefined && 0);
// console.log(undefined && 9);
