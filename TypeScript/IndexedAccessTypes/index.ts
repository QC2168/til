
type Person = { age: number; name: string; alive: boolean };
// type Age = Person["age"];
// // type Age = number

type I1 = Person["age" | "name"];
// type I1 = string | number

type Animal = ['Dog', 'Cat', 'Fish', 'Lizard']

// 使用 number 来获取数组元素的类型
type favorite = Animal[number]

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
]
type Age =typeof MyArray[number]['age']
// type Age = number
console.log(MyArray);
