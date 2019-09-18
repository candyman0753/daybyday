const times = 10000000;
const arr = Array(times);
// for
console.time("for");
for (let i = 0; i < times; i++) {}
console.timeEnd("for");
// forEach
console.time("forEach");
arr.forEach(() => {});
console.timeEnd("forEach");
