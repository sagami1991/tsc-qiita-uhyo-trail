namespace T3_2 {
  // 使用例
  /*
   * T1は { foo?: number; bar?: string; } となる
   */
  type T1 = MyPartial<{
    foo: number;
    bar: string;
  }>;
  /*
   * T2は { hoge?: { piyo: number; } } となる
   */
  type T2 = MyPartial<{
    hoge: {
      piyo: number;
    };
  }>;
}