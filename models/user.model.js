const { match } = require("assert");
const { Schema, model } = require("mongoose");
const { type } = require("os");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
    },
    lastName: {
      type: String,
      min: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please fill a valid email address",
      ],
    },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model("user", userSchema);

module.exports = User;