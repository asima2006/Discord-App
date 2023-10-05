const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middleware/auth');

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(3).max(12).required(),
    mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    mail: Joi.string().email().required(),
    password: Joi.string().min(3).max(12).required(),
})

router.post('/register', validator.body(registerSchema), authController.Controller.postRegister);

router.post('/login', validator.body(loginSchema), authController.Controller.postLogin);

router.get("/test", auth, (req,res)=>{
    res.send("request accepted");
})

module.exports = router;