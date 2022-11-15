### Web1.0
http（全名为超文本传输协议）这个定义是从1991年开始的，那个时候只是用来管理web的，它用来从网页中获取资源，将web服务器上的数据传输到你的浏览器上，它是基于TCP无状态传输协议的，每一个请求将会是独立的，也因为它是无状态请求，它的每一个请求只能去找到一个文件，当我们页面上的资源越多时，访问网页的速度也就会因此变慢。

### SPDY
后续，google公司开始开发了一个`SPDY规范`（不是一个标准协议），设计目的是将请求进行压缩、多路复用、优先级来缩短对请求时间，提高网页的安全性，将所有TCP请求和连接变成单独一个，当我们获取一个网页全部内容时就可以一次性获取全部内容，减少每个文件都去请求一遍，在SPDY也应用了TLS加密，传输内容也可以使用gz，deflate压缩。

后来，SPDY没有成为正式标准，但是http2是基于SPDY规范而衍生出来的。

#### SPDY与http的关系
SPDY只是修改http中的请求和响应在网络上的传输方式
