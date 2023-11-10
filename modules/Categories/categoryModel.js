const mongoose = require("mongoose");

// ...Create Schema....//

const categorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },

    title: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// ....Category Compile Model....//

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
