// 例如现在有一个对象
namespace TemplateLiteralType {
    type PropEventSource<T> = {
        on<Key extends string & keyof T>(e: `update${Key}`, cb: (newVal: T[Key]) => void): void
        on2: <Key extends string & keyof T>(e: `update${Key}`, cb: (newVal: T[Key]) => void) => void
    }
    declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
    type PersonType = {
        name: string;
        age: number
    }

    const joke: PersonType = {
        name: 'joke',
        age: 18
    }
    // 现在，我们想给定一个方法，给joke传入一个on事件传入回调函数，使得他可以改动里面的属性
    const person = makeWatchedObject<PersonType>(joke)
    person.on('updateage',(e)=>console.log(e))
    person.on2('updatename',(e)=>console.log(e))

    type Greeting = "Hello, world"
    type ShoutyGreeting = Uppercase<Greeting>
}