一个dom元素分为两种
- `lightTree`（光明树）也就是常规的`dom`树
- `shadowTree` （影子树）隐藏在`dom`子树，不在`html`中，不容易被发现

`shadowDomAPI` 的 `ShadowRoot` 接口是一个 `DOM` 子树的根节点，它与文档的主 `DOM` 树分开渲染。(不在`DOM`树中)

> 可以说是为封装而生

```html
<script>
  customElements.define(
    "my-cmp",
    class extends HTMLElement {
      connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `<p>
          Hello, ${this.getAttribute("name")}
        </p>`;
      }
    }
  );
</script>
<my-cmp name="张山"></my-cmp>
```

- `video`标签（宿主元素），例如暂停，播放按钮这些都是`shadow-root`的后代，其实就是一个`shadowDom`
- 只有自定义元素才能创建`shadowRoot`
- 每个元素只能创建一个`shadow root`
- `shadowDom` 是创建组件级别 `DOM` 的一种方法。
- `shadowDom`有自己的`id`空间
- 对`js`选择器隐藏，`querySelect`，`getElementXX`

