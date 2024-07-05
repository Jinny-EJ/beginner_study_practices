"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");


// API 들 
router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login); // 프론트 앤드가 전달한 로그인 데이터를 받아서 로그인을 처리해주는 API



module.exports = router;
