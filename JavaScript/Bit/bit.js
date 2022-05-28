let read = 1
let write = 1 << 1 
let remove = 1 << 2
let admin = 1 << 3

// |= 授权
// & 判断权限
// &= ~ 删除权限
// 授权

let role = read | write
console.log(!!(role & read))
console.log(!!(role & remove))
