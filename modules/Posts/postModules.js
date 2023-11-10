const mongoose = require("mongoose");

//......... Create Post Schema........ //
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Post Title is required"],
  },

  description: {
    type: String,
    require: [true, "Post description is required"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    require: [true, "Post category is required"],
  },

  numOfViews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  disLiskes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: [true, "Author is required"],
    },
  ],

  photo: {
    type: String,
    require: [true, "Post Image is required"],
  },
});

// ..............Compile Model ..........///

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
