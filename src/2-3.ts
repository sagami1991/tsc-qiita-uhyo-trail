namespace T2_3 {
  addEventListener("foobar", () => { });
  addEventListener("event", () => { }, true);
  addEventListener("event2", () => { }, {});
  addEventListener("event3", () => { }, {
    capture: true,
    once: false
  });

  // エラー例
  addEventListener("foobar", () => { }, "string");
  addEventListener("hoge", () => { }, {
    capture: true,
    once: false,
    excess: true
  });
}