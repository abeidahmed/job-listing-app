const jwt = require("jsonwebtoken");
const User = require("../models/user");

const notUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.AUTH_SECRET_KEY);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
      role: ["Admin", "Employer"]
    });

    if (!user) throw new Error();

    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ error: "Unauthorized request!" });
  }
};

module.exports = notUser;
