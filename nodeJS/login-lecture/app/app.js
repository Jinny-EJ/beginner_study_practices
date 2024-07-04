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

"use strict";


// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


// 라우팅 
const home = require( "./src/routes/home");

// 앱 세팅 
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use (express.static(`${__dirname}/src/public`));
app.use (bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));// URL 을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결 


app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드. 


module.exports = app;

