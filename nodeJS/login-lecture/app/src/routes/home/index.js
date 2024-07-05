"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");


// router 란 -> 둘 이상의 패킷전환 네트워크 또는 서브네트워크를 연결하는 장치임.
// API 들 
router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login); // 프론트 앤드가 전달한 로그인 데이터를 받아서 로그인을 처리해주는 API
router.post("/register", ctrl.process.register);


module.exports = router;
