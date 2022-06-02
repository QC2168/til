// 使用is关键字会缩小返回的类型
// 当val为true时返回String
const isString = (val: any): val is string => {
    return typeof val === 'string'
}
const isString2 = (val: any): boolean => {
    return typeof val === 'string'
}

// console.log(typeof isString('123')) boolean
// console.log(typeof isString2('123')) boolean

function bar(foo: any) {
    if (isString(foo)) {
        // 使用isString会将类型收缩string
        // foo是string类型没有pow函数
        // Property 'pow' does not exist on type 'string'.
        // console.log(foo.pow())
    }
    if (isString2(foo)) {
        // 此时foo还是any类型，所以pow不会报错
        console.log(foo.pow())
    }
}