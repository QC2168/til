interface PersonType {
  name: string;
  age?: number;
}

// 正常情况下，age属性可不填写
const p1: PersonType = {
  name: "_island",
};

// 错误，缺少age属性
// 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Required<PersonType>" 中需要该属性。ts(2741)
const p2: Required<PersonType> = {
  name: "zhangsan",
};

// type Required<T> = { [P in keyof T]-?: T[P]; }
// 将age属性变成必选属性
const p3: Required<PersonType> = {
  name: "lisi",
  age: 18,
};
