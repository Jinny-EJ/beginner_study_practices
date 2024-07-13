"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const {id, psword} = await UserStorage.getUserInfo(client.id);
    // pending = 아직 데이터를 다 읽어오지 못했다. 
    // await 을 사용해준 이유 = 가독성. 비동기로 작동되기 때문에, 자료를 다 읽을 때 까지 기다리라고 표시 
    // await 을 async 안에서만 사용 가능 

    if (id) {
      if (id === client.id && psword === client.psword) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다."};
  }

  async register() {
    const client = this.body;
    try {
    const response = await UserStorage.save(client);
    return response;
    } catch (err) {
      return { success: false, msg: err};
    }
  }
}

module.exports = User;
