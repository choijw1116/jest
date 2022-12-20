const func = require("../testAction");

/*
객체나 배열은 재귀적으로 돌면서 값을 확인해야함
toBe 대신 toEqual을 사용해야함
*/
test("이름, 나이를 전달받아 객체를 반환", () => {
  expect(func.makeUser("wan", 30)).toBe({
    name: "wan",
    age: 30,
  });
});

test("이름, 나이를 전달받아 객체를 반환 toEqual", () => {
  expect(func.makeUser("wan", 30)).toEqual({
    name: "wan",
    age: 30,
  });
});

/*
toEqual
toStrictEqual -> 더 엄격하게 테스트
*/

test("toEqual", () => {
  expect(func.makeUser("wan", 30)).toEqual({
    name: "wan",
    age: 30,
  });
});

test("toStrictEqual", () => {
  expect(func.makeUser("wan", 30)).toStrictEqual({
    name: "wan",
    age: 30,
  });
});

/*
toBeNull
toBeUndefined
toBeDefined
*/

test("toBeNull", () => {
  expect(null).toBeNull();
});

test("toBeUndefined", () => {
  expect(undefined).toBeUndefined();
});

/*
toBeTruthy
toBeFalsy
*/

test("0은 false다", () => {
  expect(func.add(1, -1)).toBeFalsy();
});

test("빈문자열이 아니면 true다", () => {
  expect(func.add("hello", "world")).toBeTruthy();
});

/*
길이제한 / 업로드파일의 길이 파악 등 사용가능
toBeGreaterThan 크다
toBeGreaterThanOrEqual 크거나 같다
toBeLessThan 작다
toBeLessThanOrEqual 작거나 같다
toBeCloseTo 소수점일때 값이 근사치인지 확인
 */

test("id는 10자 이하여야함", () => {
  const id = "NEW_ID";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비번은 4자리", () => {
  const pw = "1234";
  expect(pw.length).toBe(4);
});

test("0.1+0.2=0.3", () => {
  expect(func.add(0.1, 0.2)).toBeCloseTo(0.3);
});

/*
정규표현식
toMatch 해당 식에 해당하는지 확인하고 싶을떄
/h/i -> 뒤에 i는 대소문자를 가지지 않고싶을떄 붙이면된다
*/

test("정규표현식", () => {
  expect("hello world").toMatch(/h/i);
});

/*
배열
toContain 특정요소가 있는지 확인하고싶을떄
 */

test("유저리스트에 wan이 있는가", () => {
  const user = "wan";
  const userList = ["wan", "a", "b"];
  expect(userList).toContain(user);
});

/*
예외상황
toThrow 에러가 던져졌을떄
toThrow(인자) 특정에러가 던져지는지 보려면 toThrow에 인자추가
*/

test("유저리스트에 wan이 있는가", () => {
  expect(() => func.throwErr).toThrow("0");
});
