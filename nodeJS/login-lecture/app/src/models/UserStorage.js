"use strict";

// users.json 에서 파일을 읽어오게 하려면 파일시스템이 필요.
const fs = require("fs").promises;
// readFile 자체에서 Promise 를 제공하고 있음. 이 기능을 가져와서 사용하려면 위 처럼 .promises 를 적어주면 됨.

class UserStorage {
  // static #users = ;

  static #getUserInfo() {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      // 여기서 reduce 는 반복문
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers; // 은닉화된 private 수를 반환해줌.
  }

  static getUserInfo(id) {
    return (
      fs
        .readFile("./src/databases/users.json") // 그리고 fs 가 promises 를 반환하게 됨. 유지보수 및 가독성을 높여준다.
        //promise 를 반환을 하게 되면, then 이라는 메서드를 사용할 수 있게 된다. 그리고 promise 에 대한 오류처리는 catch() 로 할 수 있게 됨.
        // 프론트앤드에서 서버에 자료를 요청할때 사용했던 fetch API 가 바로 promise 를 반환하는 것인데, 그것과 동일하다고 생각하면 됨.
        // .then() 은 fs.readFile () 안의 것이 성공했을때 실행, .catch()는 fs.readFile () 안의 것이 실패했을 때 실행.

        .then((data) => {
          return this.#getUserInfo(data, id);
        })

        .catch(console.error)
    );
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    console.log(users);
  }
}

module.exports = UserStorage;
