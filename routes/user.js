const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");
const User = require("../models/user");

/**
 * @type POST
 * @description Signup user
 * @access PUBLIC
 */
router.post("/api/v1/signup", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

/**
 * @type POST
 * @description Login user
 * @access PUBLIC
 */
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

/**
 * @type GET
 * @description Get the current user
 * @access PRIVATE
 */
router.get("/api/v1/currentUser", auth, async (req, res) => {
  try {
    const user = req.user;
    const token = req.token;
    res.send({ user, token });
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @type GET
 * @description Fetch all the users
 * @access PRIVATE
 */
router.get("/api/v1/allUsers", auth, async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @type POST
 * @description Logout user
 * @access PRIVATE
 */
router.post("/api/v1/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @type POST
 * @description Logout user from all instances
 * @access PRIVATE
 */
router.post("api/v1/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
