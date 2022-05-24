import Person from "./ConstructorParameters";


type PersonType=InstanceType<typeof Person>;
// type PersonType = Person


type AT =InstanceType<any>
// type AT = any