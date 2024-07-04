"use strict";
// html 과 연결되어 있는 js 파일 



const id = document.querySelector("#id"),
  psward = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");


loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);

    fetch ("/login", {
        method: "POST", // html API 에 있는 method 중에 POST 사용. 
        headers: { 
            "Content-Type": "application/json"
        }, // 내가 보내는 데이터가 JSON 데이터라고 명시적으로 말하는 것. 
        body: JSON.stringify(req), // 그냥 보내는 것과 JSON 으로 보내는 것은 차이가 있는데, JSON 은 텍스트 형식으로 보내게 됨. 그냥 보낼때는 객체 형식
         // 해당 데이터를 어떤 경로에서 주고 받을지를 결정해줘야함.  이런 경로는 서버개발자가 설계하게 되고, 해당 경로에 API 가 정의되어 있어야 함.  
    }). then ((res)=> console.log(res.json()));
};