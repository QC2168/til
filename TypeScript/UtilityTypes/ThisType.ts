interface data {
  count: number;
  increase:()=>void
}

const curObj:ThisType<data> = {
  increase() {
    console.log(this.count);
  },
};

