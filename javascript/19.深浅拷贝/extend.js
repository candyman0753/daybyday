function toString(val) {
  return Object.prototype.toString.call(val);
}
function isObject(val) {
  return toString(val) === "[object Object]";
}

function extend() {}
