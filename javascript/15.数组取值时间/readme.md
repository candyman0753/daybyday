**数组里面有 10 万个数据，取第一个元素和第 10 万个元素的时间相差多少**

- JavaScript 里的数组本质上是个对象，数字索引会被转成字符串，作为属性名 key，当获取元素时通过 key 精确查找哈希表，时间复杂度都为 O(1)，故消耗时间也相差无几
