/*
mock function : 테스트를 위해서 흉내만 내는 함수
user DB에 접근해 userlist를 select 해오는 작업이 필요하다
-> 작성해야될 코드가 많어짐 / 네트워크환경, db상태드의 외부요인영향을 받음

jest.fn() -> mock함수를 만들 수 있음
만들어진 mock 함수 안에는 아래와 같은 객체값을 가진 mock property가 있음
    {
      calls: [ [] ],
      contexts: [ undefined ],
      instances: [ undefined ],
      invocationCallOrder: [ 1 ],
      results: [ { type: 'return', value: undefined } ],
      lastCall: []
    }
  calls -> 이안에는 호출되었던 값들이 고스란히 저장되어있음 / 함수가 총 몇번 호출되었는지 호출할때 전달된 인수는 무엇인지 파악가능
*/

const func = require("../matcher");
const test = require("../testAction");

const mockfn = jest.fn();
// mockfn();
// mockfn(1);

// test("함수는 2번 호출", () => {
//   expect(mockfn.mock.calls.length).toBe(2);
// });

// test("2번째 호출된 함수에 전달된 첫번째 인수는 1", () => {
//   expect(mockfn.mock.calls[1][0]).toBe(1);
// });

//숫자가 들어있는 배열을 반복하면서 1 증가시켜준 값을 callback함수에 전달해주는 함수

function Add1(arr) {
  arr.forEach((num) => {
    //함수를 만들지 않고 mock함수를 사용해서 간단히 테스트
    mockfn(num + 1);
  });
}

Add1([10, 20, 30]);
it("호출은3번", () => {
  expect(mockfn.mock.calls.length).toBe(3);
});
it("1씩 증가한 값", () => {
  expect(mockfn.mock.calls[0][0]).toBe(11);
  expect(mockfn.mock.calls[1][0]).toBe(21);
  expect(mockfn.mock.calls[2][0]).toBe(31);
});

/*
숫자의 배열중에 홀수만 걸러야하는 함수
mockReturnValueOnce -> 실핼할때마다 각각 다른 값을 넣어줄 수 있음
*/

mockfn.mockReturnValueOnce(true);
mockfn.mockReturnValueOnce(false);
mockfn.mockReturnValueOnce(true);
mockfn.mockReturnValueOnce(false);
mockfn.mockReturnValueOnce(true);

const result = [1, 2, 3, 4, 5].filter((num) => mockfn(num));

it("홀수는 false", () => {
  expect(result).toStrictEqual([1, 3, 5]);
});

//mockResolvedValue -> 비동기 흉내가능

mockfn.mackResolvedValue({ name: "wan" });

it("비동기흉내", () => {
  mockfn().then((res) => {
    expect(res.name).toBe("wan");
  });
});

// 외부코드활용이 필요할때 예를 들어 유저생성을 테스트할떄 매번 유저를 새로생성한것을 지우거나 하기 번거로운상황이라면
// mock module -> 해당 파일 자체의 mock을 하나 만들어서 mocking module을 사용할 수 있음

jest.mock("../testAction.js");
