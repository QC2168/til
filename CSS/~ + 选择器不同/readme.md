### ~ + 选择器不同之处
`~` 是匹配元素之后的选择器

`+` 是匹配相邻元素选择器

```html
<div>我是div</div>
    <p>我是p</p>
    <p>我是p</p>
    <div>我是div</div>
    <p>我是p</p>
    <div>
        <p>我是div下面的p</p>
        <p>我是div下面的p</p>
    </div>
    <span>我是span</span>
```

```css

<style>
    div+p {
        color: red;
    }

    /* 第一个p标签变红色了 */

    div~p{
        color:red;
    }

    /* div后面的p标签都变成红色了 */
</style>

```