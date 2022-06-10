namespace TupleToOject {
    const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
    type TupleToObject<T> = {
        [key in keyof T]: key
    }
    type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
}