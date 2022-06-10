type Concat<T extends any[], T2 extends any[]> = [...T, ...T2]
type Result = Concat<[1], [2]> // expected to be [1, 2]