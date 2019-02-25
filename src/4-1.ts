namespace T4_1 {
  function getFoo(obj) {
    return obj.foo;
  }

  // 使用例
  // numはnumber型
  const num = getFoo({
    foo: 123
  });
  // strはstring型
  const str = getFoo({
    foo: "hoge",
    bar: 0
  });
  // unkはunknown型
  const unk = getFoo({
    hoge: true
  });

  // エラー例
  getFoo(123);
  getFoo(null);
}