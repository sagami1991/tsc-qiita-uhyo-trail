namespace T3_4 {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + action.amount;
      case "decrement":
        return state - action.amount;
      case "reset":
        return action.value;
    }
  };

  // 使用例
  reducer(100, {
    type: 'increment',
    amount: 10,
  }) === 110;
  reducer(100, {
    type: 'decrement',
    amount: 55,
  }) === 45;
  reducer(500, {
    type: 'reset',
    value: 0,
  }) === 0;

  // エラー例
  reducer(0, {
    type: 'increment',
    value: 100,
  });
}