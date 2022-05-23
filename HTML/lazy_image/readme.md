### 图片懒加载

- 通过给img元素添加data-src属性放置原来的src地址，监听window.scroll事件当元素的offsetTop值大于滚动条Y的位置时将data-scr赋值给src
- 第二种方法和上面的方法类似，只不过是通过[Element.getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)获取元素的信息。