export default class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type PT=ConstructorParameters<typeof Person>
// type PT = [name: string, age: number]

type ET =ConstructorParameters<ErrorConstructor>
// type ET = [message?: string]

type NT =ConstructorParameters<null>
// type NT = unknown[]

type AT =ConstructorParameters<any>
// type AT = unknown[]