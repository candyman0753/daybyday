**Object.prototype.toString.call(target)**

- 返回`[object type]`，其中 type 为 target 的类型
- 所有基本数据类型都能判断，兼容性好

**instanceof**

- 内部机制是通过判断对象的原型链中能否找到类型 prototype
- 只能用于判断对象类型，原始类型不行
- 所有对象类型 instanceof Object 都为 true

**Array.isArray(target)**

- 检测 Array 实例时优先 instanceof，还可以检测出 iframes
- ES5 新增，不存在该方法时需要用 Object.prototype.toString 实现
