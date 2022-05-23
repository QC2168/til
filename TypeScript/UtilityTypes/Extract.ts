interface AList {
    name:string;
    age:number;
    type:number
}

interface BList {
    name:string;
    age:number;
    type:number
    count:number

}
interface CList {
    name:string;
    age:number;
    type:number

}

// type Extract<T, U> = T extends U ? T : never
// type LT = BList
type LT= Extract<AList|BList|CList,BList>

