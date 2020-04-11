const express = require("express");
const router = new express.Router();
const User = require("../models/user");

router.post("/sign_up", async (req, res) => {
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

module.exports = router;
