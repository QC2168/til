[浏览器开两个窗口分别访问百度，各自窗口会单独创建tcp连接吗，还是复用之前的tcp？](https://www.zhihu.com/question/554796551)





以 Chrome 来说，你可以在 DevTools 的网络面板调出连接 ID 一栏，验证我说的这些知识点。

开两个窗口和开两个标签其实是一样的，Chrome 负责发送网络请求的进程是单独的，叫 Network Service，所有网络请求都是它发送的，而不是负责渲染页面的 [renderer](https://www.zhihu.com/search?q=renderer&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A2688086521}) 进程：

![img](https://pic1.zhimg.com/50/v2-d910c3634c0109fbed35869263bf8ffc_720w.jpg?source=1940ef5c)![img](https://pica.zhimg.com/v2-d910c3634c0109fbed35869263bf8ffc_r.jpg?source=1940ef5c)

你问的这个问题妙就妙在是问百度，百度的 [www.baidu.com](https://link.zhihu.com/?target=http%3A//www.baidu.com) 恰好是为数不多还在用 HTTP/1.1 的域名。说开两个百度页面，那还得看是怎么开？是同时开？还是一个加载完了再开另外一个，这在 HTTP/1.1 下是有区别的，如果有先后顺序，先开的这个页面里最多会出现 6 个连接，但往往这些请求不是并发的，某个请求开始的时候，另外一个已经结束了，所以就能复用它的连接，我这个截图里演示的是 4 个连接：

![img](https://picx.zhimg.com/50/v2-95c692005794c048c3f6541e09128467_720w.jpg?source=1940ef5c)![img](https://picx.zhimg.com/v2-95c692005794c048c3f6541e09128467_r.jpg?source=1940ef5c)

如果 [www.baidu.com](https://link.zhihu.com/?target=http%3A//www.baidu.com) 的请求很多，总会把 6 个连接用完的。这个时候在开另外一个窗口打开百度，就会复用这 6 个连接，因为 keep-alive 嘛。

但如果是同时用两个窗口打开百度，那就纠缠混用起来了，可能最多能创建 12 个连接。

百度就说完了，另外就是现在主流的支持 HTTP/2 的域名了，比如 [http://www.taobao.com](https://link.zhihu.com/?target=http%3A//www.taobao.com)，多个窗口的多个请求，不管同时不同时发起，都是只有 1 个连接 ID，多路复用就这个意思。

![img](https://pic1.zhimg.com/50/v2-f2945e08a1086b5b057d795c0e20eb2f_720w.jpg?source=1940ef5c)![img](https://pic1.zhimg.com/v2-f2945e08a1086b5b057d795c0e20eb2f_r.jpg?source=1940ef5c)

该问题已加入各大厂和培训班面试题库。

作者：紫云飞
链接：https://www.zhihu.com/question/554796551/answer/2688086521
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



如果是 h2 的网站，那么是一个连接的，h2 协议上是支持单个连接上跑多个请求，也就是协议上的多路复用。

恩， h1 就麻烦点，分一些场景的。如果你访问了百度，百度的结果返回并渲染到页面，那么你后面再开窗口访问百度的时候，连接自然是复用的。但如果你访问百度某个页面，他不能及时返回，返回之前你快速再开一个页面去访问百度，你会发现又有新连接了。

在chrome里默认一个域名应该最多可以开6个连接，如何开更多连接，可以分多个域名，比如 cdn1.baidu.com, [http://cdn2.baidu.com](https://link.zhihu.com/?target=http%3A//cdn2.baidu.com)。

另外，当你访问主域名的不同二三级域名的时候，如果 dns 解析返回的 ip 不同，chrome 连接池里未有该连接或者无空闲连接，那么chrome也会开连接的。



作者：owen
链接：https://www.zhihu.com/question/554796551/answer/2688224118
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。