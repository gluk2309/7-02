const func = () => {
  const sum = (a, b) => a + b; // eslint-disable-line unicorn/consistent-function-scoping
  let x = 10;
  let y = 20;

  // eslint-disable-next-line no-console
  console.log(sum(x, y)); // 30

  // eslint-disable-next-line no-debugger
  debugger;
  x = 20;
  y = 30;
  // eslint-disable-next-line no-console
  console.log(sum(x, y)); // 50
};

func();
