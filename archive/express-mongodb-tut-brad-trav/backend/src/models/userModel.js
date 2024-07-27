const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    // Name field
    name: {
      type: String,
      required: [true, , "Please add a name"],
    },

    // Password
    password: {
      type: String,
      required: [true, , "Please add a password"],
    },

    // Email id used should be unique
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
  },

  //   Automatically generate timestamps
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
