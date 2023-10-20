const express = require("express");
const router = express.Router();
const friendInvitationController = require("../controllers/friendInvutation/friendInvitationController");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const postfriendInvitationSchema = Joi.object({
  targetMailAddress: Joi.string().email(),
});

const inviteDecisionSchema = Joi.object({
    id: Joi.string().required(),
  });

router.post(
  "/invite",
  auth,
  validator.body(postfriendInvitationSchema),
  friendInvitationController.controllers.postInvitation
);

router.post(
    "/accept",
    auth,
    validator.body(inviteDecisionSchema),
    friendInvitationController.controllers.postAccept
);

router.post(
    "/reject",
    auth,
    validator.body(inviteDecisionSchema),
    friendInvitationController.controllers.postReject
);

module.exports = router;
