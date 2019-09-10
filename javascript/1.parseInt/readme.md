###### 1.`['1', '2', '3'].map(parseInt)`输出?

`1, NaN, NaN`

###### 2.`parseInt(string[, radix])`

- `string` 需要转整的值，非字符串会将其转换为字符串(toString)
- `radix` 转整基数，介于 2~36，默认为 10
- 返回一个整数或 NaN
- 当 radix 为 undefined 或 0 时

  - 若 string 以'0x'或'0X'开头，radix 为 16
  - 若 string 以'0'开头，radix 为 8 或 10，具体值由实现环境决定
  - 若 string 以其他值开头，redix 为 10

###### 3.`array.map(function callBack(currentValue, index, array){}, thisArg)`

- currentValue 当前数组值
- index 当前数组下标，可选
- array 遍历数组，可选
- thisArg 指定 callBack 的 this
- 返回一个新数组
