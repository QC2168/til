interface ResultType<T=any>{
    data:T
    status:number
}

const res:ResultType<string>={
    data:'ok',
    status:200
}
res.data='ook!'
// res --> ook!

const res2:Readonly<ResultType<string>>={
    data:'ok',
    status:200
}
// 无法赋值，data是只读属性
// type Readonly<T> = { readonly [P in keyof T]: T[P]; }
res2.data='ook!'