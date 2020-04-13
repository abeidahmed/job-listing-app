const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true
    },
    lastName: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Email is required"],
      validate(email) {
        if (!validator.isEmail(email)) {
          throw new Error("Invalid email address.");
        }
      }
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password is too short. (min 6 chars)"]
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

// validate email uniqueness
userSchema.path("email").validate(async email => {
  const emailCount = await User.countDocuments({ email });
  if (emailCount) throw new Error("Email already exists");
});

// remove unnecessary data from the user object
userSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

// generate a jwt token and concat it to user collection
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.AUTH_SECRET_KEY);

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// find user by credentials
userSchema.statics.findByCredentials = async function(email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Unable to login!");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Unable to login!");

  return user;
};

// hash password before saving the user
userSchema.pre("save", async function(next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
