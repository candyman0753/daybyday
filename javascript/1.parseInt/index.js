console.log(parseInt(0x16));

console.log(parseInt(016));

// 首位不为数字，返回NaN
console.log(parseInt("s16"));

// 解析截至非数字位
console.log(parseInt("1s6"));

console.log(["1", "2", "3"].map(parseInt));

parseInt("1", 0); // 1
parseInt("2", 1); // NaN，1不在基数范围
parseInt("3", 2); // NaN，3超出二进制数范围
