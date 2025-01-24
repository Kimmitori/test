const express=require("express");
const userController = require("../controllers/user.controller.js");
const userRouter = express.Router();
userRouter.use("/", userController.userPage);
module.exports = userRouter;