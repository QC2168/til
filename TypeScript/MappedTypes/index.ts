namespace MappedType {

    type OptionsType = {
        mode: boolean
        role?: string
    }

    // 映射类型，就是使用了 PropertyKeys 联合类型的泛型，其中 PropertyKeys 多是通过 keyof 创建，然后循环遍历键名创建一个类型：
    type otherOption = {
        [Property in keyof OptionsType]: OptionsType[Property]
        // other property
    }

    // 修饰符
    // 在使用映射类型时，还有两个额外的修饰符可能用到
    // readonly 用于设置属性只读，
    // ？ 用于属性可选

    // 可以通过前缀 - 或者 + 删除或者添加这些修饰符，如果没有写前缀，相当于使用了 + 前缀。



    // 删除只读的属性
    type CreateMutable<T> = {
        -readonly [Property in keyof T]: T[Property]
    }

    type LockedAccount = {
        readonly id: string;
        readonly name: string;
    };

    type UnlockedAccount = CreateMutable<LockedAccount>;
    // type UnlockedAccount = {
    //     id: string;
    //     name: string;
    // }

    // 删除可选的属性
    type Concrete<T> = {
        [property in keyof T]-?: T[property]
    }

    type MaybeUser = {
        id: string;
        name?: string;
        age?: number;
    };

    type User = Concrete<MaybeUser>;
    // type User = {
    //     id: string;
    //     name: string;
    //     age: number;
    // }

    // 在 TypeScript 4.1 及以后，你可以在映射类型中使用 as 语句实现键名重新映射：
    type Getters<Type> = {
        [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
    };

    interface Person {
        name: string;
        age: number;
        location: string;
    }

    type LazyPerson = Getters<Person>;

    // type LazyPerson = {
    //    getName: () => string;
    //    getAge: () => number;
    //    getLocation: () => string;
    // }

}