**1. set**
成员唯一且无序的类数组数据结构

- `new Set([iterable])`
  - 成员可以是原始值或对象的引用
  - 新增值不发生类型转换，但 NaN 等于 NaN
- 实例属性
  - constructor：构造函数
  - size：元素数量
- 实例方法
  - add(val)：增
  - delete(val)：删
  - has(val)：查
  - clear()：删库
- 遍历方法
  - keys(): 返回所有键的迭代器
  - values(): 返回所有值的迭代器
  - entries(): 返回所有键值对的迭代器
  - forEach(callBack,thisArg)

**2. weakSet**
用于存储*弱引用对象*

- 特点
  - 仅能存储对象，不能存放值
  - 储存的对象都是被弱引用的，即垃圾回收机制不考虑 WeakSet 对该对象的引用；若没有其他变量或属性引用该对象，则垃圾回收机制运行时该对象会被回收，此时在 weakSet 内也不存在该对象了
  - 不可遍历
- 实例属性
  - constructor：构造函数
- 实例方法

  - add(obj)
  - has(obj)
  - delete(obj)

**3. map**
以[key, value]形式储存数据

- `new Map([iterable])`
  - 具有双元素数组成员的数据结构可作为构造函数参数
  - map 的键值是和内存地址绑定的，只要内存地址不一样，则认为是两个键
- 实例属性
  - constructor：构造函数
  - size
- 实例方法

  - set(key, value)
  - get(key)
  - has(key)
  - delete(key)
  - clear()

- 遍历方法
  - keys(): 返回所有键的迭代器
  - values(): 返回所有值的迭代器
  - entries(): 返回所有键值对的迭代器
  - forEach(callBack,thisArg)

**4. weakMap**
键值对集合，键名是弱引用对象，而值可以任意

- 特点
  - key 不可枚举
  - 每个键对自己所引用对象的引用都是弱引用，在没有其他引用和该键引用同一对象，这个对象将会被垃圾回收（相应的 key 则变成无效的
- 属性
  - constructor
- 方法
  - has(key)
  - get(key)
  - set(key, val)
  - delete(key)
