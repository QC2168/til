export default function fun1(x: number, y: number, z: number) {
  console.log(x, y, z);
  return { x, y, z };
}

type p1=Parameters<(name:number)=>void>
// type p1 = [name: number]

type p2=Parameters<<T>(arg:T)=>T>
// type p2 = [arg: unknown]

// 获取fun1函数的参数类型
type p3=Parameters<typeof fun1>
// [x: number, y: number, z: number]

// 分析
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never