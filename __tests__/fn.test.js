const fn = require("../testAction");

/* 
test 실행
npm test -> test.js 파일 or __tests__ 폴더 안에 있는 테스트파일이 다 실행됨
npm test test파일명 or test파일경로 -> 해당 test파일만 실행시키고 싶을떄
*/

/*
jest = zero config철학을 가지고 있어 별도의 설치없이 빠르게 테스트케이스를 만들 수 있음
test(테스트돌렸을때 나올 문장, 함수)
expect(검증할 value).toBe(기대되는 value)
*/
test("1은 1", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("이름과 나이를 전달받아 객체로 반환", () => {
  expect(fn.makeUser("나", 30)).toStrictEqual({ name: "나", age: 30 });
});

test("이름과 나이를 전달받아 객체로 반환", () => {
  expect(fn.makeUser("나", 30)).toEqual({ name: "나", age: 30 });
});
