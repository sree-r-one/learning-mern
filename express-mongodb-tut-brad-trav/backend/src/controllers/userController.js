/**
 * @desc  Register a new User
 * @route GET /api/users
 * @param {Request} req
 * @param {Response} res
 * @access Public
 */
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

/**
 * @desc  Authenticate a User
 * @route POST /api/users/login
 * @param {Request} req
 * @param {Response} res
 * @access Public
 */
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

/**
 * @desc  Get User data
 * @route GET /api/users/me
 * @param {Request} req
 * @param {Response} res
 * @access Public
 */
const getUserData = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getUserData,
};
