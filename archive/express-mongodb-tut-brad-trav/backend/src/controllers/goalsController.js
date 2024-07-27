const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");

/**
 * @desc  GET goals
 * @route GET /api/goals
 * @access Private
 */
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json({ message: goals });
});

/**
 * @desc  SET goals
 * @route POST /api/goals
 * @access Private
 */
const setGoal = asyncHandler(async (req, res) => {
  // Handle empty text
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }

  // Create the entry from body
  const goal = await Goal.create({
    user: req.user.id,
    text: req.body.text,
  });

  res.status(200).json({ message: goal });
});

/**
 * @desc  PUT goals
 * @route PUT /api/goals/:id
 * @access Private
 */
const updateGoal = asyncHandler(async (req, res) => {
  //Find goal by ID
  const goal = await Goal.findById(req.params.id);

  // Null Check
  if (!goal) {
    res.status(400);
    throw new Error(`Goal not found`);
  }

  const user = await User.findById(req.user.id);

  // Check for User
  if (!user) {
    res.status(401).json({ message: "User Not Found!" });
    return;
  }

  // Make sure logged in user matches goal user
  if (goal.user.toString() !== user.id) {
    res.status(401).json({ message: "User Not authorized!" });
    return;
  }

  // Update the Goal if found
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({ message: updatedGoal });
});

/**
 * @desc  DELETE goals
 * @route DELETE /api/goals/:id
 * @access Private
 */
const deleteGoal = asyncHandler(async (req, res) => {
  //Find goal by ID
  const goal = await Goal.findByIdAndDelete(req.params.id);

  // Null Check
  if (!goal) {
    res.status(400);
    throw new Error(`Goal not found`);
  }

  const user = await User.findById(req.user.id);

  // Check for User
  if (!user) {
    res.status(401).json({ message: "User Not Found!" });
    return;
  }

  // Make sure logged in user matches goal user
  if (goal.user.toString() !== user.id) {
    res.status(401).json({ message: "User Not authorized!" });
    return;
  }

  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
