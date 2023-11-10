const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConfig = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected Succesfully");
  } catch (error) {
    console.log(`DB Not Connect`, error.message);
    process.exit(1);
  }
};

dbConfig();
