"use strict";

const User = require("../../models/User");


const output = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  }
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);

    //login.js 파일의 fetch 에서 데이터를 body 에 저장했기 때문에, body 안에 있는 req 를 보기 위해 이렇게 코드를 작성해 줘야함.
    // 하지만 body를 썼다고 해서 데이터를 잘 파싱 해오진 못하는데, 이때 모듈이 하나 더 필요함. (Parsing  파싱 : 컴퓨터 과학 및 프로그래밍 에서의 특정 형식으로 구성된 데이터를 분석하고 그 의미를 이해하는 과정을 의미한다. )
    // app.js 폴더의 모듈 라인에 const bodyParser = require("body-parser"); 추가 이후 설치
    // app.use (bodyParser.json()); / app.use(bodyParser.urlencoded({ extended: true })); 미들웨어도 넣어줘야함. 똑같은 app.js 폴더
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
