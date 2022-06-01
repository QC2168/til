// 泛型 分发条件类型（Distributive Conditional Types）

type T1<T> = T extends any ? T[] : never
type StringT1 = T1<string> // string[]
type NumberT1 = T1<number> // number[]
type CrossT1=T1<number|string> // type CrossT1 = string[] | number[]

// 如果你想要数组类型为 (string|number)[]
// 你可以用方括号包裹 extends关键字的每一部分。
type T2<T> = [T] extends [any] ? T[] : never
type CrossT2=T2<number|string> // (string | number)[]