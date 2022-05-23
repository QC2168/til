interface PhoneType {
  width: number;
  height:  number;
}

const D1:PhoneType={
    width:100,
    height:100
}

// 错误， 缺少height属性
// 类型 "{ width: number; }" 中缺少属性 "height"，但类型 "PhoneType" 中需要该属性。ts(2741)
const D2:PhoneType={
    width:100,
}

// 此时，weight和height变为可选属性
// type Partial<T> = { [P in keyof T]?: T[P]; }
const D3:Partial<PhoneType>={
    width:100,
}