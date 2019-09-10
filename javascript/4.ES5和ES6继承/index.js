class Parent {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class Child extends Parent {
  constructor(x, y, color) {
    // this.color = color; // 报错
    super(x, y);
    this.color = color;
  }
}

const child = new Child();

console.log(Child instanceof Child);
console.log(Child instanceof Parent);

// Object.getPrototypeOf 获取一个类的父类
console.log("Child的父类", Object.getPrototypeOf(Child));

// ES5中每个对象都有__proto__属性，指向对应构造函数的prototype
// ES6每个子类都有__proto__和prototype属性
console.log("Parent.__proto__", Parent.__proto__);
console.log("Child.__proto__", Child.__proto__ === Parent);
console.log("Child.prototype", Child.prototype.__proto__ === Parent.prototype);
