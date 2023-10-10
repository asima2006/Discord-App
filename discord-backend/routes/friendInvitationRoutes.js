const express = require('express');
const router = express.Router();
const friendInvitationController = require('../controllers/friendInvutation/friendInvitationController');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middleware/auth');

const postfriendInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email(),
});

router.post('/invite', auth,  validator.body(postfriendInvitationSchema),friendInvitationController.controllers.postInvitation);

module.exports = router;