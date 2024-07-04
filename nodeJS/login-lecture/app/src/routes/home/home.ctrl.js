"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    //login.js 파일의 fetch 에서 데이터를 body 에 저장했기 때문에, body 안에 있는 req 를 보기 위해 이렇게 코드를 작성해 줘야함.
    // 하지만 body를 썼다고 해서 데이터를 잘 파싱 해오진 못하는데, 이때 모듈이 하나 더 필요함. (Parsing  파싱 : 컴퓨터 과학 및 프로그래밍 에서의 특정 형식으로 구성된 데이터를 분석하고 그 의미를 이해하는 과정을 의미한다. )
    // app.js 폴더의 모듈 라인에 const bodyParser = require("body-parser"); 추가 이후 설치
    // app.use (bodyParser.json()); / app.use(bodyParser.urlencoded({ extended: true })); 미들웨어도 넣어줘야함. 똑같은 app.js 폴더
    const id = req.body.id,
      psword = req.body.psword;
    // const userStorage = new UserStorage(); 를 사용하지 않고  바로 userStorage 에 접근하려면 UserStorage 파일에서 static 선언을 해줘야함. 
    const users = UserStorage.getUsers("id","psword");



    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        response.success = true;
        return res.json(response);
      } // json 형태로 프론트로 성공했다는 말을 보내줌.
    }

    response.success = false;
    response.msg = "로그인에 실패하셨습니다";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
