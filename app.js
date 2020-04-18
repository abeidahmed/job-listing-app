const express = require("express");
require("./db");
const app = express();
const userRouter = require("./routes/user");

app.use(express.json());

// router
app.use("/api/v1", userRouter);

module.exports = app;
