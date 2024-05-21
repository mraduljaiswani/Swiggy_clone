import sum from "../Sum";

test("sum function to calculate sum", () => {
  const result = sum(4, 6);
  expect(result).toBe(10);
});
