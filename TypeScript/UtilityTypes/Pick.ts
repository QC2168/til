interface HousesItemType {
  desc: string;
  houseCode: string;
  houseImg: string | string[];
  price: number | string;
  tags: string[];
  title: string;
}

// type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
// 从 HousesItemType 类型中提取出 houseCode houseImg price
type MiniHousesItemType = Pick<
  HousesItemType,
  "houseCode" | "houseImg" | "price"
>;

const item: MiniHousesItemType = {
  houseCode: "39cadd9a",
  houseImg: "file_path",
  price: "1000",
};
