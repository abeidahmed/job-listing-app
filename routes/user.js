const express = require("express");
const router = new express.Router();
const User = require("../models/user");

// @type POST
// @description Signup user
router.post("/api/v1/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
});

// @type POST
// @description Login user
router.post("/api/v1/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
