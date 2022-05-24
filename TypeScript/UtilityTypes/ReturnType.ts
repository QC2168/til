function f1(name: string): string {
  return name;
}

type f1Type = ReturnType<typeof f1>;
// type f1Type = string

function f2<T>(name: T): T {
  return name;
}

type f2Type = ReturnType<typeof f2>;
// type f2Type = unknown

// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
