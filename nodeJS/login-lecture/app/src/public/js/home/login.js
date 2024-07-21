"use strict";
// html 과 연결되어 있는 js 파일 



const id = document.querySelector("#id"),
  psward = document.querySelector("#psword"),
  loginBtn = document.querySelector("#button");


loginBtn.addEventListener("click", login);

function login() {
    if (!id.value) return alert("아이디를 입력해주세요.");
    if (!psword.value) return alert("비밀번호를 입력해주세요.");
    

    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(req);

     
    fetch ("/login", {
        method: "POST", 
        headers: { 
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req), 
    })

    .then ((res) => res.json())  
    .then((res) => {
        if (res.success) { 
            location.href = "/"; 
        } else {
            if (res.err) return alert(res.err);
            alert(res.msg);
        }
    })

    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    });
};


// fetch 는 Javascript 의 내장 함수로, 네트워크 요청을 보내고 응답을 받을 수 있게 해줌. 
// fetch 는 프로미스 promise 를 반환하며, 네트워크 요청이 완료되면 이 프로미스는 성공 또는 실패로 처리됨. 
// fetch (url, options); 형태로 작성됨. 이때 url 은 요청을 보낼 URL options 는 HTTP 메서드, 헤더, 본문 등을 포함한 설정 객체 
// 위의 코드 설명 => /login 경로로 HTTP POST 요청을 보냅니다.
// 요청 헤더에 Content-Type을 application/json으로 설정하여 JSON 형식의 데이터를 보낸다는 것을 명시합니다.
// 요청 본문에 사용자의 아이디와 비밀번호를 JSON 문자열로 변환하여 보냅니다.

// then 은 프로미스를 처리하기 위해 사용됨. 프로미스가 성공적으로 완료되면,`then 블록이 실행됨. 
// then 은 두개의 콜백 함수를 인수로 받는데, 첫번째는 성공시 호출되고, 두번째는 실패시 호출됨. (두번째 콜백은 생략이 가능하며, 대신 'catch 를 사용할 수 있음.)
// promise.then(onFulfilled, onRejected); 형식으로 사용. 

// catch 는 프로미스가 실패했을때 (예외가 발생했을 때) 처리하기 위해 사용됨. 
// then 체인에서 에러가 발생하면 catch 블록이 실행됨. 

