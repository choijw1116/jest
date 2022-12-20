const func = require("../callback");

/*
callback 
jest는 test함수 안이 다 실행이 되면 끝
test함수에서 인자로 done함수를 넘겨주고 done()를 실행시켜줘야함
api에러를 감지하고 싶으면 try catch로 감싸주자
*/

test("0+1=1", () => {
  expect(func.add(0, 1)).toBe(1);
});

test("3초후 이름은 wan", (done) => {
  function callback(name) {
    try {
      expect(name).toBe("wan");
      done();
    } catch (error) {
      done();
    }
  }
  func.getName(callback);
});
