const func = require("../testAction");

/*
하단 테스트의 문제점
num이 각 test함수 안에서 새로운 값이 할당이 되고있음(0 -> 1 -> 3 -> 6 -> 10)
이럴때 테스트를 실행하기 직전에 num을 초기화시켜주는 작업이 필요 
-> beforeEach함수 사용
beforeEach() 각각의 테스트함수가 실행되기 직전에 실행된다
afterEach() 각가의 테스트함수가 실행되고 난 직후에 실행된다
*/

// let num = 0;

// beforeEach(() => {
//   num = 0;
// });

// test("0+1=1", () => {
//   num = func.add(num, 1);
//   expect(num).toBe(1);
// });

// test("0+2=2", () => {
//   num = func.add(num, 2);
//   expect(num).toBe(2);
// });

// test("0+3=3", () => {
//   num = func.add(num, 3);
//   expect(num).toBe(3);
// });

// test("0+4=4", () => {
//   num = func.add(num, 4);
//   expect(num).toBe(4);
// });

/*
테스트 전후작업이 시간이 걸리는 작업이라면?
ex) 테스트전에 user db에 접속에 user 정보를 가져오고 테스트 후에는 db 커넥션을 끊는다면? 

db는  한번연결하면 모든정보를 가져오고 태스트가 다 끝난후 끊어도 상관없음
유저정보는 한번만 가져오고 재활용이 가능하므로 최초로 한번 최후로 한번 해주는것이 더 좋음
beforeAll() -> 최초로 테스트함수 실행전에 한번 실행
afterAll() -> 최초로 테스트가 다 끝난 후 한번 실행
.only -> only 만 붙은 테스트케이스만 테스트실행 나머지는 skip
.skip -> skip 이 붙은 테케만 건너뛰고 테스트를 실행
*/

let user;

//작업전에 userDb를 가져온다
beforeAll(async () => {
  user = await func.connectUserDb();
});

//작업후에는 db연결 끊기
afterAll(() => {
  return func.disconnectDb;
});

test("이름 : wan", () => {
  expect(user.name).toBe("wan");
});

test("나이 : 30", () => {
  expect(user.age).toBe(30);
});

test.only("성별 : gender", () => {
  expect(user.gender).toBe("female");
});

/*
db정보가 늘어난다면?
유저정보와 자동차정보도 가져올 경우?

describe -> 비슷한 카테고리를 묶어서 테스트할 수 있음
it -> test 함수와 동일
*/

describe("차 관련 테스트", () => {
  let car;
  //해당 beforeAll은 describe 내부에서 실행
  beforeAll(async () => {
    car = await func.connectCarDb();
  });

  //해당 afterAll은 describe 내부에서 실행
  afterAll(() => {
    return func.disconnectCarDb;
  });

  it("이름 : gv80", () => {
    expect(car.name).toBe("gv80");
  });

  it("브랜드 : volvo", () => {
    expect(car.brand).toBe("volvo");
  });

  it("색 : red", () => {
    expect(car.color).toBe("red");
  });
});

//함수실행순서보기
//

beforeAll(() => console.log("밖 beforeAll")); //1
beforeEach(() => console.log("밖 beforeEach")); //2 ,6
afterAll(() => console.log("밖 afterAll")); //마지막
afterEach(() => console.log("밖 afterEach")); //4, 10

it("0+1=1", () => {
  console.log("!!!!밖 테스트!!!!");
  expect(func.add(0, 1)).toBe(1); //3
});

describe("차 관련 테스트", () => {
  beforeAll(() => console.log("안 beforeAll")); //5
  beforeEach(() => console.log("안 beforeEach")); //7
  afterAll(() => console.log("안 afterAll")); //마지막 -1
  afterEach(() => console.log("안 afterEach")); //9

  it("0+1=1", () => {
    console.log("!!!!안 테스트!!!!");
    expect(func.add(0, 1)).toBe(1); //8
  });
});
