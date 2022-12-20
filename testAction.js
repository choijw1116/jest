const test = {
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age, gender) => ({ name, age, gender: undefined }),
  getName: (callback) => {
    const name = "wan";
    setTimeout(() => {
      // callback(name);
      throw new Error("서버에러");
    }, 3000);
  },
  getAge: () => {
    const age = 30;
    return new Promise(() => {
      setTimeout(() => {
        // res(age);
        rej("error");
      }, 3000);
    });
  },
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "wan",
          age: 30,
          gender: "female",
        });
      }, 500);
    });
  },
  disconnectDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "volvo",
          name: "gv80",
          color: "red",
        });
      }, 500);
    });
  },
  disconnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  throwErr: () => {
    throw new Error("X");
  },
};
module.exports = test;
