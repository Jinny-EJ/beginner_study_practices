"use strict";


class UserStorage {
    static #users = { // static 을 붙이면 정적변수가 됨. #를 넣어주면 private 한 경우로 지정됨. 
        id: ["woorimIT", "나개발", "김팀장"],
        psword: ["1234", "1234", "123456"],
        name: ["우리밋","나개발","김팀장"],
      };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => { // 여기서 reduce 는 반복문
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users [field];
            }
            return newUsers;
        },{});
        return newUsers; // 은닉화된 private 수를 반환해줌. 
    }
}

module.exports = UserStorage;
