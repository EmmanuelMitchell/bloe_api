const express = require("express");
const {
  creatPostHandler,
  getAllPostHandler,
  getSinglePostHandler,
  updatePostHandler,
  deletePostHandler,
} = require("../../controllers/posts/postController");

const postRouter = express.Router();

postRouter.post("/create", creatPostHandler);
postRouter.get("/", getAllPostHandler);
postRouter.get("/:id", getSinglePostHandler);
postRouter.put("/:id", updatePostHandler);
postRouter.delete("/:id", deletePostHandler);

module.exports = postRouter;
