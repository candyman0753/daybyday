**数组浅拷贝**

- 浅拷贝，基本类型完全拷贝，互不影响；对象或数组拷贝引用，共享同一个对象或数组

  ```js
  let arr = [0, { name: "jack" }, ["old"]];
  let arr_1 = arr.concat([]);
  arr_1[0] = 1;
  arr_1[1].name = "queen"; // 复制引用，影响原对象
  console.log("concat", arr, arr_1);

  let arr_2 = arr.slice();
  arr_2[0] = 2;
  arr_2[2][0] = "new"; // 复制引用，影响原数组
  console.log("slice", arr, arr_2);

  const obj = { name: "jack", fnc: function() {}, arr: [1, 2] };
  obj.arr[0] = 0; // 复制引用，影响原数组
  const obj_1 = Object.assign({}, obj);
  ```

- 深拷贝，完全拷贝，互不影响

  - JSON.parse(JSON.stringify(obj)) 适用于对象和数组，无法拷贝函数

  ```js
  const arr = [
    "0",
    { name: "jack" },
    [0],
    function() {},
    { fn: function() {} }
  ];
  const arr_1 = JSON.parse(JSON.stringify(arr));
  // ["0", { name: "jack" }, [0], null, {}]
  ```

  - 递归遍历

  ```js
  function mergeObject(...objs) {
    const result = Object.create(null);
    objs.forEach(obj => {
      if (!obj || !isObject(obj)) {
        throw new Error(`${obj}is not an Object`);
      }
      Object.keys(obj).forEach(key => {
        const val = obj[key];
        if (isObject(val)) {
          if (isObject(result[key])) {
            result[key] = mergeObject(result[key], val);
          } else {
            result[key] = mergeObject(val);
          }
        } else {
          result[key] = val;
        }
      });
      return result;
    });
  }
  ```
