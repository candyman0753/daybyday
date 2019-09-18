**input 搜索如何防抖，如何处理中文输入**

- 添加防抖函数
- 中文处理考虑 compositionstart 和 compositionend，但不同浏览器触发顺序有差异

```
firefox 62.0
compositionstart -> compositionend -> input
chrome 76
compositionstart ->input-> compositionend
```
