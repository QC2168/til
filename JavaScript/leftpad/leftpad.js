// 业务代码

// 字符串补零
// 业务代码
function leftpad(str, length, ch) {
    let len = length - str.length + 1
    return Array(len).join(ch) + str
}

// 10个字符串
// 位运算 + 二分实现
function leftpad1(str, length, ch) {
    let len = length - str.length
    let total = ""
    while (true) {
        if (len & 1) {
            total += ch
        }
        if (len == 1) {
            return total + str
        }
        ch += ch
        len = len >> 1
    }
}
// 稍微改下
function leftpad2(str, length, ch) {
    let len = length - str.length
    let total = ""
    while (true) {
        if (len % 2 == 1) {
            total += ch
        }
        if (len == 1) {
            return total + str
        }
        ch += ch
        len = parseInt(len / 2)
    }
}

console.log(leftpad('hello', 20, '0'))
console.log(leftpad1('hello', 20, '0'))
console.log(leftpad2('hello', 20, '0'))