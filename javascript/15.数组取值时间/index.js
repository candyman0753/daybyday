const counts = 100000;
const arr = new Array(counts);
console.time("start");
console.timeEnd("start");
// 第一个
console.time("arr first");
arr[0];
console.timeEnd("arr first");
// 最后一个
console.time("arr last");
arr[arr.length - 1];
console.timeEnd("arr last");

const obj = {
  0: "first",
  100000: "last"
};
// 第一个
console.time("obj first");
obj[0];
console.timeEnd("obj first");
// 最后一个
console.time("obj last");
obj[100000];
console.timeEnd("obj last");
