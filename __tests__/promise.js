const func = require("../testAction");

/*
promise 
promise를 사용할떄는 test홤수 안에서 return을 사용해주어야한다.
*/

test("0+1=1", () => {
  expect(func.add(0, 1)).toBe(1);
});

test("3초후 나이는 30", () => {
  func.getAge().then((age) => {
    expect(age).toBe(30);
  });
});

/*
보다 간단하게 작성하고싶다면 아래 matcher를 사용
resolves
rejects
*/

//resolves, rejects
test("3초후 나이는 30", () => {
  // return expect(func.getAge().resolves.toBe(30)); //resolve
  return expect(func.getAge().rejects.toMatch("error")); //rejects
});
