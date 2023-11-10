const express = require("express");
const {
  registerHandler,
  loginHandler,
  profileHandler,
  getAllUserHandler,
  updateUserHandler,
  deleteUserHandler,
} = require("../../controllers/users/userControllers");

const userRouter = express.Router();

userRouter.post("/register", registerHandler);
userRouter.post("/login", loginHandler);
userRouter.get("/profile/:id", profileHandler);
userRouter.get("/", getAllUserHandler);
userRouter.put("/:id", updateUserHandler);
userRouter.delete("/:id", deleteUserHandler);

module.exports = userRouter;
