function toString(val) {
  return Object.prototype.toString.call(val)
}
function isObject(val) {
  return toString(val) === '[object Object]'
}
function isArray(val) {
  return toString(val) === '[object Array]'
}
function isFunction(val) {
  return toString(val) === '[object Function]'
}
function isBoolean(val) {
  return toString(val) === '[object Boolean]'
}
function arrClone(arr = []) {
  const tempArr = []
  arr.forEach(item => {
    if (isObject(item)) {
      tempArr.push(merge({}, item))
    } else if (isArray(item)) {
      tempArr.push(arrClone(item))
    } else {
      tempArr.push(item)
    }
  })
  return tempArr
}
function objectMerge(isDeep = true, ...objs) {
  const result = Object.create(null)
  if (!isBoolean(isDeep)) {
    objs.unshift(isDeep)
    isDeep = true
  }
  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isDeep && isObject(val)) {
          if (isObject(result[key])) {
            result[key] = merge(result[key], val)
          } else {
            result[key] = merge(val)
          }
        } else if (isDeep && isArray(val)) {
          // 数组直接深拷贝
          result[key] = arrClone(val)
        } else {
          result[key] = val
        }
      })
    }
  })
  return result
}
