# Today I Learned
📝 Today I Learned

## HTML

- 图片懒加载 2022-5-23  `HTML\lazy_image`
- Node和Element
- childNodes和childNodes

## CSS

- 元素水平垂直居中 2022-5-23  `CSS\元素水平垂直居中`
- `textarea` 禁止拉伸 2022-5-23  `HTML\textarea_no_stretching`
- `CSS border`实现三角形及聊天信息框小尾巴 `CSS\triangle`
- `~ + 选择器不同之处` 2022-5-23 `CSS\~ + 选择器不同\readme.md`
- `position sticky` 2022-5-23 `CSS\sticky`
- 不能展示动画效果的css属性 2022-5-23 `CSS\不能展示动画效果的css属性`
- `img`标签中的`CORS`，实现在画布中使用跨域的img图像，就像在原生canvas中使用一样 2022-5-24
- [30个你必须熟记的CSS选择器 ](https://code.tutsplus.com/zh-hans/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
- `mask` 2022-7-1 `CSS\mask`
- `grid` 2022-8-6 `CSS\grid`
- @import与link区别 2022-9-4 `CSS\@import与link区别`

## JavaScript

- 复制文本到剪切板 & 监听监听剪切板中的内容 2022-5-23 `HTML\copy_text`
- `requestIdleCallback` **幕后任务协作调度 API**  2022-5-23 `JavaScript\requestIdleCallback`
- 实现`softBind`函数 2022-5-23 `JavaScript\softbind`
  - `bind`函数多次调用会已第一次绑定的`this`为准，`softbind`已最后一次绑定传入的`this`为准
- 数组深拷贝 2022-5-24 `JavaScript\cloneArray`
  - array.from
  - array.concat
  - array.slice
  - spread operator
  - json.stringify -> json.prase
- 实现 `flatMap` 2022-5-24 `JavaScript\flatMap`
- 获取浏览器唯一标识 2022-5-24 `JavaScript\getBrowerFinger`
  -  由于不同系统显卡绘制的`canvas`时渲染参数，抗锯齿等算法不同，因此绘制的图片数据的CRC校验也不同
  - [相关插件库 fingerprintjs](https://github.com/fingerprintjs/fingerprintjs)
- 实现`MyInstanceOf` 2022-5-24 `JavaScript\instanceOf`
- 判断一个对象是否有环
  - 收集对象中的对象，进行判断
  - 使用`stringify`，在`catch`中`includes('Converting circular structure to JSON')`
- `once` 函数 2022-5-24 `JavaScript\once`
- currentTarget和target的区别 2022-5-27 `JavaScript\currentTargetOrtarget`
- 实现`async` 2022-5-27 `JavaScript\async`
- `bit` 2022-5-28 `JavaScript\bit`
- `leftpad` 2022-5-28 `JavaScript\leftpad`
- `debounce` 2022-5-29 `JavaScript\debounce`
- `throttle` 2022-5-29 `JavaScript\throttle`
- `sum` 2022-5-29 `JavaScript\sum`
- `queryString` 2022-5-29 `JavaScript\queryString`
- `delay` 2022-5-29 `JavaScript\delay`
- `sleep` 2022-5-29 `JavaScript\sleep`
- `isInteger` 2022-5-30 `JavaScript\isInteger`
- `Intl` 2022-6-30 `JavaScript\INTL`
- `手写new` 2022-6-30 `JavaScript\new`
- `es6 import exec` 2022-7-12 `JavaScript\importExec`
- `Iterator, asyncIterator` 2022-7-14 `JavaScript\Iterator`
- `LRU` 2022-11-14 `JavaScript\LRU`
- `ShadowRoot` 2022-11-15 `JavaScript\ShadowRoot`
- `compress` 2022-12-18 `JavaScript\compress`
## TypeScript
- 了解使用`TS`高级用法 2022-5-23 `TypeScript\UtilityTypes`
- `IndexedAccessTypes` `number`属性 2022-6-1 `TypeScript\IndexedAccessTypes `
- 泛型 分发条件类型 2022-6-1 `TypeScript\DistributiveConditionalTypes` 
- 映射 2022-6-1 `TypeScript\MappedTypes`
- `is` 关键字 2022-6-2 `TypeScript\is`
- `this`类型保护 2022-6-2 `TypeScript\this-basedTypeGuards`
- 字面量模板类型 2022-6-2 `TypeScript\TemplateLiteralTypes`
- 魔数 2022-7-8 `TypeScript\magicNumber`
- 交换变量 2022-8-23 `JavaScript\交换变量`
- 推断`promise`类型 `Typescript\interPromiseType`

## Vue

- `v-model`语法糖 2022-5-27  `Vue\v-model语法糖`

## HTTP

- `status code 103 early hints` 
- [SPDY-Google开发的基于传输控制协议的应用层协议](https://zh.m.wikipedia.org/wiki/SPDY) 2022-7-8
- `status code 206 partial content` 2022-7-12
- ` 多个浏览器窗口会单独创建tcp连接吗` 2022-9-25


## Node
- `process.env.npm_config_user_agent` 2022-8-29

##
- [Chromium 渲染流水线](https://zhuanlan.zhihu.com/p/574069391) 2022-10-16

## tools
- 找到没有被用到的文件依赖 `knip`