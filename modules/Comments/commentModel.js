const mongoose = require("mongoose");
const { object } = require("webidl-conversions");

// .....Create Comment Schema ....//

const commentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      require: [true, "Post is required"],
    },
    user: {
      type: object,
      require: [true, "User is required"],
    },
  },
  { timestamps: true }
);

// .....Comment Compile Model.....//

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
