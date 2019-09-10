**ES5 和 ES6 继承的区别**

- ES5 继承
  - 实质是先创建子类实例对象 this，然后再将父类的方法添加到 this 上(`Parent.apply(this)`)
  - 每个对象都有`__proto__`属性，指向对应构造函数的 `prototype` 属性
- ES6 继承

  - 实质先将父类实例对象的属性和方法加到 this 上面(`super`方法)，然后再用子类构造函数修改 this
  - 子类同时有 `prototype` 和`__proto__`属性

  ```js
  Child.__proto__ === Parent;
  Child.prototype.__proto__ === Parent.prototype;
  ```
