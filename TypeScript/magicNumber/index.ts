// 魔法数字指的是代码中出现的没有说明的数字。代码中突然出现一个没说明用途的数字会让其它阅读代码、维护代码的的人非常难受。
const Pixels = 2073600

const WIDTH = 1920;
const HEIGHT = 1080;
const totalPixels = WIDTH * HEIGHT; // 2073600
// 在开发时少用魔法数字
// 在现代编程规范中比较忌讳这样写代码，一方面看不懂意思，另一方面如果2073600这个数字多次出现，一旦需要修改的时候就需要全部找出来改掉，一旦少改一处就会产生BUG，非常麻烦。

// 在某些具有特定格式的文件，喜欢在文件开头 写几个特色的字符，以表明自己的身份，以便验证正身
// 比较常见的几种图片格式的文件
/*
    jpeg FFD8FF
    png  89504E47
    GIF  47494638
    bmp  424D
*/

// 参考资料
// https://www.zhihu.com/question/22018894
// https://baike.baidu.com/item/magic%20number/6759327