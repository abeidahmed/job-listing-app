const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/is-admin");
const User = require("../models/user");

/**
 * @type POST
 * @description Signup user
 * @access PUBLIC
 */
router.post("/signup", async (req, res) => {
  const user = new User(req.body);

  if (req.body.role !== "User") {
    return res.send({ message: "Unrecognized field set." });
  }

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
 * @description Create user by admins
 * @access PRIVATE, only admin
 */
router.post("/createUser", isAdmin, async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

/**
 * @type POST
 * @description Login user
 * @access PUBLIC
 */
router.post("/login", async (req, res) => {
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
 * @type PATCH
 * @description Update user
 * @access PRIVATE
 */
router.patch("/users/:id", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["firstName", "lastName", "email", "password"];
  const isValidUpdate = updates.every(update => allowedUpdates.includes(update));

  if (!isValidUpdate) res.status(400).send({ error: "Invalid update parameters" });

  const _id = req.params.id;
  try {
    const user = await User.findById(_id);

    if (!user) res.status(404).send({ error: "User is not present!" });

    updates.forEach(update => {
      user[update] = req.body[update];
    });
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send();
  }
});

/**
 * @type GET
 * @description Get the current user
 * @access PRIVATE
 */
router.get("/currentUser", auth, async (req, res) => {
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
 * @access PRIVATE, only admin
 */
router.get("/allUsers", isAdmin, async (req, res) => {
  const sort = {};
  const { role, name, sortBy, page, perPage } = req.query;

  if (sortBy) {
    const parts = sortBy.split("_");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }

  const match = {
    ...(role && { role }),
    ...(name && {
      $or: [
        { firstName: { $regex: name, $options: "i" } },
        { lastName: { $regex: name, $options: "i" } }
      ]
    })
  };

  const options = {
    limit: parseInt(perPage) || 10,
    page: parseInt(page) || 1,
    sort,
    customLabels: {
      totalDocs: "totalUsers",
      docs: "users"
    }
  };

  try {
    const users = await User.paginate(match, options);

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
router.delete("/logout", auth, async (req, res) => {
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
router.delete("/logoutAll", auth, async (req, res) => {
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
 * @access PRIVATE, only admin
 */
router.delete("/user/:id", isAdmin, async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findOne({ _id });
    if (!user) return res.status(500).json({ error: "User is not present on the database." });

    if (user.role === "Admin") {
      return res.status(500).json({ error: "Cannot delete admins." });
    }

    await User.findOneAndRemove({ _id });

    res.send(user);
  } catch (err) {
    res.status(500).send();
  }
});

module.exports = router;
