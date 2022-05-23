import Person from "./ConstructorParameters";

function f1(this:Person){
    console.log(this);

}

type TT=ThisParameterType<typeof f1>
// type TT = Person