interface CarType {
  name: string;
  type: string;
  color: string;
}

const C1: CarType = {
  name: "Car1",
  type: "mini",
  color: "red",
};

// 从CarType类型中，忽略color属性
// type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
const C2: Omit<CarType, "color"> = {
  name: "Car1",
  type: "mini",
};
