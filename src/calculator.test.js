const calculator = require("./calculator");

test("adds 1 + 2 to equal 3", () => {
  let a = 1;
  let b = 2;
  let c = 3;
  expect(calculator.add(a, b)).toBe(c);
});
