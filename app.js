const express = require("express");
require("./configDB/dbConnect");
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./routes/users/userRoutes");
const postRouter = require("./routes/posts/postRoutes");

const app = express();

app.use(express.json());

//Routes Middleware
app.use("/api/v1/users", userRouter);
app.use("/api/v1/post", postRouter);

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`App is running on ${PORT}`));
