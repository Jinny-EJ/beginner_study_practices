"use strict";
// html 과 연결되어 있는 js 파일 



const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psward = document.querySelector("#psword"),
  confirmPsward = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");


registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해주세요.");
    if (psword.value !== confirmPsward.value) {
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };

    // 데이터를 JSON 형식으로 서버에 보내는 부분 
    fetch ("/register", {
        method: "POST", // html API 에 있는 method 중에 POST 사용. 
        headers: { 
            "Content-Type": "application/json"
        }, // 내가 보내는 데이터가 JSON 데이터라고 명시적으로 말하는 것. 
        body: JSON.stringify(req), // 그냥 보내는 것과 JSON 으로 보내는 것은 차이가 있는데, JSON 은 텍스트 형식으로 보내게 됨. 그냥 보낼때는 객체 형식
         // 해당 데이터를 어떤 경로에서 주고 받을지를 결정해줘야함.  이런 경로는 서버개발자가 설계하게 되고, 해당 경로에 API 가 정의되어 있어야 함.  
    })

    // 서버에서 응답한 데이터를 받아서 작동하는 부분 정의 
    .then ((res) => res.json()) // then 이라는 것을 사용해서 서버에서 응답한 데이터를 받을 수 있음. 
    .then((res) => {
        if (res.success) { //만약 res 에서 success 가 true 라면 if 문 진행 
            location.href = "/login"; // 회원가입 성공시 이동 페이지 정의 
        } else {
            alert(res.msg); // 로그인 실패시 실패 알람 
        }
    })
    
    // fetch 이후 코드 중 에러 발생시 
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });
};