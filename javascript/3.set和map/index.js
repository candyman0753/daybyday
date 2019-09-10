function setTest() {
  let set = new Set();
  set.add({ b: 1 });
  set.add(1);
  set.add("1");
  set.add(NaN);
  for (let i of set.keys()) {
    console.log("keys", i);
  }
  for (let i of set.values()) {
    console.log("values", i);
  }
  for (let i of set.entries()) {
    console.log("entries", i);
  }
  set.forEach((val, key) => {
    console.log(key, val);
  });
}
/*********************************** */
function weakSetTest() {
  let weakSet = new WeakSet();
  const obj = {},
    foo = {};
  console.log(weakSet);
  weakSet.add(obj);
  console.log(weakSet.has(obj));
  console.log(weakSet.has(foo));
  console.log(weakSet.delete(obj));
}
/*********************************** */
function mapTest() {
  let map = new Map();
  const a = {},
    b = {};
  map.set(a, "jack");
  map.set(b, 1);
  map.set("name", 1);
  console.log(map.get(a));
  console.log(map.has(a));
  console.log(map.delete(a));
}
/*************************************** */
function weakMapTest() {
  let weakMap = new WeakMap();
  const a = {};
  weakMap.set(a, "jack");
  // weakMap.set(1, "queen"); // 报错，key 值不合法
}
weakMapTest();
