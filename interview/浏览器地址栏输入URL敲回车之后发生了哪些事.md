- 判断输入的是 URL 还是搜索的关键字
- 转换非 ASCII 的 Unicode 字符

  - 比如：中文、空格

- 检查 HSTS 列表

  - 浏览器检查自带的“预加载 HSTS（HTTP 严格传输安全）”列表，这个列表里包含了那些请求浏览器只使用 HTTPS 进行连接的 URL，如果这个 URL 在列表里，则默认使用 HTTPS 协议而不是 HTTP 协议

- 查找域名的 IP 地址

  - 查找浏览器的 DNS 缓存，没找到则执行下一步
  - 查找操作系统中的 DNS 缓存，没找到则执行下一步
  - 查找 OS 中的 hosts 文件，没找到则执行下一步
  - 在 OS 的 LDNS 中查找域名对应的 IP（这一步可能会遇到 DNS 污染，解决方案为：1. 切换 DNS 服务器；2. 清空 DNS 缓存；3. 修改系统 hosts 文件，将域名与对应的 IP 地址绑定写死），没找到则发起一个迭代 DNS 解析请求

    - LDNS 向 根域名服务器 发起请求，RDNS 返回 一级域名 对应的 IP 地址
    - LDNS 向 一级域名服务器 发起请求，得到 二级域名 对应的 IP 地址
    - LDNS 向 二级域名服务器 发起请求，得到 三级域名 对应的 IP 地址

  - LDNS 将得到的 IP 地址返回给 OS，并且将这个 IP 地址缓存起来
  - OS 将 IP 地址返回给浏览器，并且将这个 IP 地址缓存起来
  - 浏览器得到域名对应的 IP 地址，并且将这个 IP 地址缓存起来

- 建立 TCP 连接

  - 三次握手

    - 第一次：浏览器 向 服务器 发送一个 SYN 报文，表示请求建立连接，此时处于 SYN_SENT 状态
    - 第二次：服务器 得到 SYN 报文，回应一个 SYN + ACK 报文，此时处于 SYN_REVD 状态
    - 第三次：浏览器 收到 SYN + ACK 报文，回应一个 ACK 报文，处于 ESTABLISHED 状态
    - 服务器收到 ACK 报文后，也处于 ESTABLISHED 状态
    - 三次握手的目的是为了确认双方的 接受能力 和 发送能力是否正常

  - 如果是 HTTPS 协议，三次握手过程还会进行数字证书验证以及加密密匙的生成

    - 浏览器发送一个 ClientHello 消息到服务器，消息中包含了它的 TLS（Transport Layer Security）版本，可用的加密算法和压缩算法
    - 服务端向浏览器返回一个 ServerHello 消息，消息中包含了服务端的 TLS 版本，服务器所选择的加密和压缩算法，以及数字证书认证机构（CA）签发的服务器公开证书，证书中包含了钥，浏览器会使用这个公钥加密接下来的握手过程，直到协商生成新的对称密匙
    - 浏览器根据自己信任的 CA 列表，验证服务器的证书是否可信，若是可信，浏览器会生成一串伪随机数，使用服务器的公钥加密他，这串随机数被用于生成新的对称密钥
    - 服务端使用自己的私钥解密上面的随机数，然后使用这串随机数生成自己的对称主密钥
    - 浏览器发送一个 Finished 消息给服务端，使用对称密钥加密这次通讯的一个散列值
    - 服务端生成自己的 hash 值，然后解密客户端发送来的消息，检查这两个值是否对应，如果对应，就向浏览器发送一个 Finished 消息，并使用协商好的对称密钥加密
    - 至此，接下来整个会话都是用对称密钥加密，传输内容

- 发送请求与接收响应

  - 浏览器 向 服务器 发起一个 http-get 请求，请求中包含 URL、连接方式、User-Agent、cookie 等信息
  - ![38223505-d8ab53da-371d-11e8-9263-79814b6971a5.png](https://camo.githubusercontent.com/352e6066a74ff6a20d73f84be98e93e6461852a52694f3a0ade9f205f97ed2d2/68747470733a2f2f692e6c6f6c692e6e65742f323031392f31302f31382f617a4f51694b336d71325a735949722e706e67)
  - 缓存具体行为在文章底部
  - 服务器接收请求

    - 鉴权，判断用户是否可以访问该资源
    - 将对应的 HTML 文件返回给浏览器
    - 若是后端架构为：代理服务器-服务器集群，则会先通过代理服务器进行端口转发、负载均衡等一系列动作，目的是为了降低服务器压力。

- 解析 HTML & 页面渲染

  - 解析：HTML、CSS、JS

    - 从浏览器进程的角度出发

      - 浏览器进程有以下：

        - Browser 进程：浏览器的主进程，负责主控，协调，只有一个

          - 负责下载页面的网络文件
          - 负责将 render 进程得到的存在内存中的位图渲染到页面上
          - 负责创建和销毁 tab 进程
          - 负责与用户交互

        - GPU 进程：只有一个

          - 负责 3D 绘制，只有当页面使用了硬件加速才会使用他，来渲染页面，否则不是用这个进程，而是用 Browser 进程来渲染页面

        - render 进程：又叫做浏览器内核，每个 tab 页面对应一个独立的 render 进程，内部有多个线程

          - render 进程是多线程的，例如：

            - JS 引擎线程：

              - 也叫 JS 内核，解析 JS 脚本，执行代码
              - 与 GUI 线程互斥，当 JS 引擎线程运行时，GUI 线程会被挂起，直到 JS 引擎线程结束运行，才会继续运行 GUI 线程
              - 有一个主线程和多个 web worker 线程组成，由于 web worker 是附属于主线程，无法操作 dom 等，所以 JS 还是单线程语言（在主线程运行）

            - GUI 渲染线程

              - 用户解析 HTML 为 DOM 树，解析 CSS 为 CSSOM 树，布局 layout，绘制 paint
              - 当页面需要 重排 reflow，重绘 repaint 时，使用该线程
              - 于 JS 引擎线程互斥

            - 事件触发线程

              - 当对应事件触发（不论是 WebAPIs 完成事件触发，还是页面交互事件触发）时，该线程会将事件对应的回调函数放入 callback queue（任务队列）中，等待 JS 引擎线程处理。

            - 定时触发线程

              - 对应 setTimeout，setInterval，由该线程来计时，当计时结束，将事件对应的回调函数放入任务队列中
              - 当 setTimeout 的定时小于 4ms，一律按 4ms 计算

            - http 请求线程

              - 每由一个 http 请求就开一个该线程
              - 当检测到状态变更时，就会产生一个状态变更事件，如果该状态变更事件有对应回调函数的话，则放入任务队列中
              - 任务队列轮询线程
              - 用于轮询监听任务队列，以知道任务队列是否为空

    - 在解析过程中，可能会请求图片、外部 CSS、JS 文件，会开启一个 http 线程，建立 TCP 连接，发送请求与接收响应
    - 解析的过程可能会反复很多次，因为 JS 可能会修改 DOM
    - 解析 HTML 生成 DOM 树
    - 解析 CSS 生成 CSS 树
    - 调用 render 进程的 GUI 线程 来解析 HTML 和 CSS 为 DOM 树和 CSSOM 树
    - 解析 HTML 时，遇到 script 标签，先判断是内嵌代码还是外部 JS 文件，内嵌代码直接开启 JS 引擎线程，挂起 GUI 线程，执行 JS 代码，如果是外部 JS 文件，将会开启 http 线程下载 JS 文件并执行

  - 渲染：构建 样式树 - 渲染 - 布局 - 绘制

    - 根据 CSS 树和 DOM 树 来创建 渲染树
    - 渲染树完成后进行布局处理，确定每个节点在屏幕上的显示位置。
    - 绘制

- 断开连接

  - 四次挥手

    - 第一次：浏览器 向 服务器发送一个 FIN 报文，处于 FIN_WAIT_1 状态
    - 第二次：服务器收到 FIN 报文后，发送 ACK 报文给浏览器，表示已经收到浏览器的报文，此时处于 CLOSE_WAIT 状态
    - 第三次：若此时服务器也想断开连接，和浏览器第一次挥手一样，发送一个 FIN 报文，此时处于 LAST_ACK 状态
    - 第四次：浏览器收到 FIN 之后，发送一个 ACK 报文作为应答，此时客户端处于 TIME_WAIT 状态，等待一段时间确保服务器收到自己的 ACK 报文后进入 CLOSED 状态
    - 服务器收到 ACK 报文后，就会断开连接，处于 CLOSED 状态

- 浏览器缓存分类：

  - 强缓存
  - 协议缓存

- 浏览器在加载资源时，会根据 request header 中的 expires 和 cache-control 判断是否命中强缓存
- 如果没有命中强缓存，client 将会向 server 发送请求，通过 last-modified 和 etag 验证资源是否命中**协议缓存**，若**命中协议缓存**，server 将会返回请求，但不会返回任何数据，资源依旧从缓存中读取
- 相同点

  - 如果命中，都是从 client 加载资源，不从服务器加载

- 不同点

  - 强缓存不发请求，协议缓存发送请求

- 强缓存

  - 通过 Expires 和 Cache-Control 两种 request header 实现
  - Expires

    - Expires 表示资源过期时间，是一个绝对时间，由服务器返回。Expires 通过本地时间判断，也就是说，如果修改了本地时间，可能会造成缓存失效或者无法得到更新的资源

  - Cacha-Control

    - publi 表示资源可以被任何对象缓存，比如：client、代理服务器
    - private 表示只能被单个用户换粗，不可共享缓存，即代理服务器不可缓存
    - no-cache 表示发布缓存副本之前，强制要求原始服务器校验缓存
    - no-store 表示不缓存
    - max-age 表示缓存存储的最大周期，超过此时间就认为缓存过期，这个时间是相对时间
    - 优先级高于 Expires

- 协议缓存

  - 当强缓存没有命中时，就会发送请求到服务器，验证协议缓存是否命中，如果协议缓存命中，请求响应返回的 http 状态码为 304，并且会显示 Not Modified
  - 协议缓存通过 Last-Modified、If-Modified-Since 和 ETag、If-None-Match 这两对 Header 来管理的
  - Last-Modified、If-Modified-Since

    - Last-Modified 表示本地文件最后修改日期，浏览器会在 request header 加上 If-Modified-Since （上次返回的 Last-Modified 的值），询问服务器在该日期后资源是否更新，有更新的话就会返回新资源

  - ETag、If-None-Match

    - Etag 描述了资源的信息摘要值，如果资源发生了变化，那么 Etag 的值也会变化，跟修改时间无关，Etag 保证每个资源都是唯一。
    - If-None-Match 会将上次的 Etag 发送给服务器，服务器将 两次 Etag 值进行对比，若是不相同，则返回新的资源
    - Etag 优先级高于 Last-Modified

待补充：

- [ ] CSS GPU 加速
- [ ] 客户端含有 Service Worker 的缓存情况

参考 [what-happens-when-zh_CN](https://github.com/skyline75489/what-happens-when-zh_CN)、[缓存（二）——浏览器缓存机制：强缓存、协商缓存](https://github.com/amandakelake/blog/issues/41)


> 原文地址 https://github.com/ZinkWu/Blog/issues/11