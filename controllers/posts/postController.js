const creatPostHandler = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Post Created",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const getAllPostHandler = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "get Alll Post",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const getSinglePostHandler = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "get Single Post",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const updatePostHandler = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Post Updated",
    });
  } catch (error) {
    res.json(error.message);
  }
};

const deletePostHandler = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: "Post deleted",
    });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  creatPostHandler,
  getAllPostHandler,
  getSinglePostHandler,
  updatePostHandler,
  deletePostHandler,
};
