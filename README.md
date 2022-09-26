# 微信小程序 含QQ表情解析 文本展示组件

本项目为微信小程序组件 部分依赖于[qtext-parse](https://github.com/we-digest/qtext-parse)

暂时只支持以 git submodule 的方式引入 暂不支持 miniprogram_npm module

```sh
cd miniprogram
npm install --save qtext-parse
git submodule add git@github.com:we-digest/wxacomp-qtext.git
```

```js
// pages/test/test.json
{
  "usingComponents": {
    "qtext": "../../wxacomp-qtext/qtext"
  }
}
```

```html
<!-- pages/test/test.wxml -->
<view>
  <qtext text="{{content}}"></qtext>
</view>
```

```js
// pages/test/test.js
Page({
  data: {
    content: `周一读报[愉快]
多国央行加息忙[白眼]
银行减费助经济[强]
火力发电贡献大[悠闲]
大城市落户放宽[玫瑰]
集装箱运价大跌[发呆]
韩自动驾驶商用[發]`
  }
})
```

<img width="374" src="WechatIMG548.jpeg">
