// type NonNullable<T> = T extends null ? never : T
type stringType=NonNullable<string|undefined|null>
// type stringType = string