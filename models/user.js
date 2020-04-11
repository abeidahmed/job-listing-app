const mongoose = require("mongoose");
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
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
      validate(email) {
        if (!validator.isEmail(email)) {
          throw new Error("Invalid email address.");
        }
      }
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password should be greater than 5 characters."]
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
