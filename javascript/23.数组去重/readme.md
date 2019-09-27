###数组去重

- new Set
  ```js
  function unique(arr = []) {
    return Array.from(new Set(arr)); // [...new Set(arr)]
  }
  ```
- 双循环
  ```js
  function unique(arr = []) {
    const result = [];
    for (let i = 0, j, len = arr.length; i < len; i++) {
      for (j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
          break;
        }
      }
      if (j === result.length) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  ```
- indexOf
  indexOf 底层还是使用===判断，会忽略 NaN
  ```js
  function unique(arr = []) {
    const result = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      const current = arr[i];
      if (result.indexOf(current) === -1) {
        result.push(current);
      }
    }
    return result;
  }
  ```
- filter
  ```js
  // indexOf
  function unique(arr = []) {
    return arr.filter((item, index, array) => {
      return array.indexOf(item) === index;
    });
  }
  // sort
  function unique(arr = []) {
    return arr
      .concat()
      .sort()
      .filter((item, index, array) => {
        return !index || item !== array[index - 1];
      });
  }
  // Object key
  function unique(arr = []) {
    const obj = {};
    return arr.filter((item, index, array) => {
      const key = typeof item + JSON.stringify(item); // 处理数字和对象key
      return obj.hasOwnProperty(key) ? false : (obj[key] = 1);
    });
  }
  ```
