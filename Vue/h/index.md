```javascript
 const foo = h('div', {
            onClick: () => {
                console.log('foo')
            }
        })
```



## h函数过程

判断container是不是对象

如果是对象在判断是不是一个vnode

不是一个vnode，创建vnode



```
export const createVNode = (

 __DEV__ ? createVNodeWithArgsTransform : _createVNode

) as typeof _createVNode
```



进入  _createVNode



判断是否动态组件

判断是否vnode

判断是不是class组件

  export function isClassComponent(value: unknown): value is ClassComponent {

  return isFunction(value) && '__vccOpts' in value

  }

判断props {click:()=>console.log('foo')}

  guardReactiveProps （判断是否proxy对象，）

​    判断props是不是proxy对象



```
// track vnode for block tree

 if (

  isBlockTreeEnabled > 0 &&

  // avoid a block node from tracking itself

  !isBlockNode &&

  // has current parent block

  currentBlock &&

  // presence of a patch flag indicates this node needs patching on updates.

  // component nodes also should always be patched, because even if the

  // component doesn't need to update, it needs to persist the instance on to

  // the next vnode so that it can be properly unmounted later.

  (vnode.patchFlag > 0 || shapeFlag & ShapeFlags.COMPONENT) &&

  // the EVENTS flag is only for hydration and if it is the only flag, the

  // vnode should not be considered dynamic due to handler caching.

  vnode.patchFlag !== PatchFlags.HYDRATE_EVENTS

 ) {

  currentBlock.push(vnode)

 }
```



## render函数过程

ensureRenderer

baseCreateRenderer

判断当前浏览器环境

赋值window._vue_为true

进入render.render函数

进入patch函数，对比

n1为null(old_node)  n2 ‘div’
