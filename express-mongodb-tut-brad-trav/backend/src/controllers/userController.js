const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
/**
 * @desc  Register a new User
 * @route GET /api/users
 * @param {Request} req
 * @param {Response} res
 * @access Public
 */
const registerUser = asyncHandler(async (req, res) => {
  // Get name, email, password from body
  const { name, email, password } = req.body;

  // Check if the fields are valid
  if (!name || !email || !password) {
    res.status(400).json({ message: "Please add all the fields!" });
    return;
    // throw new Error("Please add all fields ");
  }

  // Check if the user exists in the database
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // User is new, Register user
  if (user) {
    res.status(201).json({
      message: {
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(400).json({ message: "Invalid User" });
  }
});

/**
 * @desc  Authenticate a User
 * @route POST /api/users/login
 * @param {Request} req
 * @param {Response} res
 * @access Public
 */
const loginUser = asyncHandler(async (req, res) => {
  // Parse the request
  const { email, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({ email });

  // Validation
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      message: {
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(400).json({ message: "Invalid Credentials" });
  }

  res.json({ message: "Login User" });
});

/**
 * @desc  Get User data
 * @route GET /api/users/me
 * @param {Request} req
 * @param {Response} res
 * @access Private
 */
const getUserData = asyncHandler(async (req, res) => {
  res.json({ message: "User data display" });
});

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUserData,
};
