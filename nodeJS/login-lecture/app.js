// 지금 부분은 html 을 이용해서 서버 접속하는 방법 
// const http = require("http");
// // 이건 내장 함수라 다른 api 를 다운받지는 않아도 됨. 
// const app = http.createServer((req,res) =>{
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8"});
//     if (req.url === "/" ) {
//         res.end("여기는 루트입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });





// 하지만 우리는 express 를 사용할 것임. 

// 모듈
const express = require("express");
const app = express();

const PORT = 3000;

// 라우팅 
const home = require( "./routes/home");

// 앱 세팅 
app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드. 

app.listen(PORT, () => {
  console.log("서버가동");
});
