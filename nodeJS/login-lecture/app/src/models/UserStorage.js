"use strict";

// users.json 에서 파일을 읽어오게 하려면 파일시스템이 필요. 
const fs = require("fs").promises;



class UserStorage {
    // static #users = ;

    static getUsers(...fields){
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) => { // 여기서 reduce 는 반복문
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users [field];
            }
            return newUsers;
        },{});
        return newUsers; // 은닉화된 private 수를 반환해줌. 
    }

    static getUserInfo(id) {
        console.log(fs.readFile("./src/databases/users.json")); 
        
        
        
        
        // (err,data) => {
        //     if (err) throw err;
        //     const users = JSON.parse(data);
        //     const idx = users.id.indexOf(id);
        //     const usersKeys = Object.keys(users);
        //     const userInfo = usersKeys.reduce((newUser, info) => {
        //         newUser[info] = users[info][idx];
        //         return newUser;
        //     },{});
    
        //     return userInfo; 
        // });
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
