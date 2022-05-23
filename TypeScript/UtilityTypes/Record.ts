interface PersonType {
  name: string;
  age?: number;
}

type Names = "_island" | "zhangsan" | "lisi";

// 将Names作为list的属性名称，PersonType作为属性值类型
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
const list: Record<Names, PersonType> = {
  _island: { age: 10, name: "_island" },
  zhangsan: { age: 5, name: "zhangsan" },
  lisi: { age: 16, name: "lisi" },
};

