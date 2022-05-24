function foo(this: number) {
  console.log(this);
}

const fooType: OmitThisParameter<typeof foo> = foo.call(1);
