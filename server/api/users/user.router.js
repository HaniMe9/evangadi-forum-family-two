const express = require('express');
const router = express.Router();

//user controller
const {register,login,checkuser} = require('../Controller/userController')




//  register route
router.post("/register", (req, res) => {
    res.send("register user");
})


// login user
router.post("/login", (req, res) => {
    res.send("login user");
})


// check user
router.get("/check", (req, res) => {
    res.send("check user");
})


module.exports = router

