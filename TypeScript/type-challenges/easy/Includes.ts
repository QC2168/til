type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type Equal<A, B> = A extends B ? true : false

type Includes<T extends any[], U> = T extends [infer R, ...infer L] ? Equal<R, U> extends true ? true : Includes<L, U> : false