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
  const sort = {};

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split("_");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }

  try {
    const users = await User.find({}, null, {
      sort,
      limit: parseInt(req.query.limit),
      skip: parseInt(req.query.skip)
    });
    res.send(users);
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @type DELETE
 * @description Logout user
 * @access PRIVATE
 */
router.delete("/api/v1/logout", auth, async (req, res) => {
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
 * @type DELETE
 * @description Logout user from all instances
 * @access PRIVATE
 */
router.delete("/api/v1/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @type DELETE
 * @description Delete the user from the database
 * @access PRIVATE
 */
router.delete("/api/v1/user/:id", auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findOne({ _id });
    if (!user) throw new Error();

    await User.findOneAndRemove({ _id });

    res.send(user);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
