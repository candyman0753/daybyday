**一、 水平居中**

1. 行内元素，父元素设置 `text-align: center;`
2. 块级元素，该元素设置 `margin: 0 auto;`
3. flex 布局，父元素设置 `display: flex; justify-content: center;`
4. 绝对定位，配合 `transform`、`负 margin-left` 或 `left:0;right:0;margin:0 auto;`

**二、 垂直居中**

1. 单行文本，设置 `line-height` 等于父元素高度;
2. 行内块级元素，使用 `dipslay:inline-block;vertical-align:middle` 及伪元素;
3. 元素不定高：
   1. flex 布局，父元素设置 `display: flex; align-items: center;`
   2. 父元素设置 `display:table-cell;vertical-align:middle;`;此时父元素设置宽高无效，需再外嵌一个父元素`display:table`
   3. 子元素绝对定位结合 translate(0,-50%)
4. 元素定高：
   1. 子元素绝对定位结合 `top:50%;height:固定值;margin-top:-0.5*固定值;`
   2. 子元素绝对定位结合 `top:0;bottom:0;height:固定值;margin:auto 0;`

**三、 水平垂直居中**

1. 固定宽高
   1. 绝对定位+ 负边距
   2. 绝对定位+ margin:auto
2. 未知宽高
   1. 绝对定位+ translate
   2. flex 布局
