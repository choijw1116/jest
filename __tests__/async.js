const func = require("../testAction");

/*
async await
promise와 마찬가지로 resolves, rejects matcher 사용가능
*/

test("0+1=1", () => {
  expect(func.add(0, 1)).toBe(1);
});

test("3초후 나이는 30", async () => {
  const age = await func.getAge();
  expect(age).toBe(30);
});

test("3초후 나이는 30 resolve matcher사용", async () => {
  await func.getAge().resolves.toBe(30);
});
