namespace T3_5 {
  type Func<A, R> = (arg: A) => R;

  // 使用例
  const f1: Func<number, number> = num => num + 10;
  const v1: number = f1(10);
  const f2: Func<undefined, number> = () => 0;
  const v2: number = f2();
  const v3: number = f2(undefined);

  // エラー例
  const v4: number = f1();
}