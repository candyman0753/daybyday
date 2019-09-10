**设备像素 device pixel/物理像素 physical pixel**
显示器最小的物理显示单位，每个物理像素由颜色值和亮度组成
`像素密度 PPI = 设备对角线像素值 / 设备对角线英寸长度`
如 iPhone6 有 750\*1334 个物理像素，对角线 4.7 英寸，ppi 为 326

**设备独立像素**
即 CSS 像素，NA 开发中屏幕宽度的逻辑像素，如 iphone6 的 device-width 为 375

**设备像素比 device pixel ratio**
`dpr = 设备像素 / 设备独立像素(某一方向)`
iPhone6 的 dpr = 750 / 375 = 2

**viewport**

- 可见视口 visual viewport，指屏幕宽度
  `window.innerWidth/innerHeight`
- 布局视口 layout viewport，指 DOM 宽度
  `doucument.documentElement.clientWidth/clientHeight`
- 理想视口 ideal viewport，布局视口就是可见视口
  `<meta name="viewport" content="width=device-width,user-saclable=no,initical-sacle=1.0,maximum-scale=1.0,minimum-sacle=1.0">`
  - user-saclable 是否允用户缩放网页 yes/no
  - initical-scale 初始化缩放比例 number
  - maximum-sacle: 允许用户缩放的最大值 number
  - minimum-scale：允许用户缩放的最小值 number

**图片模糊问题**

- 问题分析：一个位图像素是栅格图像的最小数据单元，每个位图像素包含自身显示信息(如显示位置，颜色值，透明度等)
  理论上一个位图像素对应一个物理像素，图片才能完美清晰展示，对于 dpr=2 的屏幕，一个位图对于 4 个物理像素，由于单个位图像素不可继续分割，所以就近取色，导致图片模糊

- 解决方案：根据 dpr 使用相应多倍图，如 200\*300px 的 img 标签，在 dpr=2 的屏幕下使用 2 倍图 400\*600 图片

**1px 细线问题**

- 问题分析：设计师想要的 1px 宽的直线其实是 1 物理像素宽，在 Retina 屏下可认为是 0.5px；但并非所有浏览器都能识别 border: 0.5px，有些系统会将其处理为 0px
- 解决方案：

  - 伪元素+transform

  ```css
  .border-1px {
    position: relative;
  }
  @media screen and (-webkit-min-device-pixel-ratio: 2) {
    .border-1px:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      background-color: #999;
      transform-origin: 0 0;
      -webkit-transform-origin: 0 0;
      transform: scaleY(0.5);
      -webkit-transform: scaleY(0.5);
    }
  }
  ```

  - 使用 js 根据屏幕尺寸和 dpr 调整 rem 基准和 initial-scale 值
