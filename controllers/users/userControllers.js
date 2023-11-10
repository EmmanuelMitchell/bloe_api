const User = require("../../modules/Users/userModel");
const bcrypt = require("bcrypt");
const generatToken = require("../../utils/generateToken");

const registerHandler = async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, password } = req.body;
  try {
    // ....Check if user has email....//
    const userFound = await User.findOne({ email });
    if (userFound) {
      res.json({
        msg: "User Alredy Exist",
      });
    }
    // Hasing Password
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(password, salt);

    // create user
    const creatUser = await User.create({
      firstName,
      lastName,
      email,
      password: hasPassword,
    });
    res.status(200).json({
      status: "Success",
      data: creatUser,
    });
  } catch (error) {
    res.json(error.message);
  }
};

// ........................//

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) {
      res.json({
        msg: "Wrong credentail",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, userFound.password);

    if (!isPasswordMatch) {
      res.json({
        msg: "Wrong credentail",
      });
    }
    res.status(200).json({
      status: "Success",
      data: {
        firstName: userFound.firstName,
        lastName: userFound.lastName,
        email: userFound.email,
        isAdmin: userFound.isAdmin,
        token: generatToken(userFound._id),
      },
    });
  } catch (error) {
    res.json(error.message);
  }
};

const profileHandler = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const userID = await User.findById(id);
    res.status(200).json({
      status: "Success",
      data: userID,
    });
  } catch (error) {
    res.json(error.message);
  }
};

const getAllUserHandler = async (req, res) => {
  try {
    res.status(200).json({
      status: "Success",
      data: "All Users",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const updateUserHandler = async (req, res) => {
  try {
    res.status(200).json({
      status: "Success",
      data: "Update Users",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const deleteUserHandler = async (req, res) => {
  try {
    res.status(200).json({
      status: "Success",
      data: "delete Users",
    });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  registerHandler,
  loginHandler,
  profileHandler,
  getAllUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
