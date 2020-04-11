const express = require("express");
require("./db");
const app = express();
const userRouter = require("./router/user");

app.use(express.json());

// router
app.use(userRouter);

module.exports = app;
