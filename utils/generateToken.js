const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generatToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, { expiresIn: "6d" });
};

module.exports = generatToken;
