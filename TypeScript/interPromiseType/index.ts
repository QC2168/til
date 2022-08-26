// 返回一个async函数的去除promise的里面的值类型
type PromiseReturnType<T extends (...args: any[]) => Promise<any>> =
  ReturnType<T> extends Promise<infer R> ? R : ReturnType<T>;

// example
const foo = () => {
  return new Promise<string>((resolve, reject) => {
    resolve("123");
  });
};

type fooType = PromiseReturnType<typeof foo>; // type fooType = unknown

type fooType2 = Awaited<typeof foo>; // type fooType2 = () => Promise<unknown>

// 返回被promise包裹的里面的类型
type PromiseInnerType<T extends Promise<any>> = T extends Promise<infer R>
  ? R
  : T;

// example

type p1 = Promise<number>;

type p1Type = PromiseInnerType<p1>;
