interface A {
  size: number;
  color: string;
}

interface B {
  size: number;
}

// type Exclude<T, U> = T extends U ? never : T
const C: Exclude<B, A> = {
  size: 100,
};
