/**
 * @desc  GET goals
 * @route GET /api/goals
 * @access Private
 */
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

/**
 * @desc  SET goals
 * @route SET /api/goals/:id
 * @access Private
 */
const setGoal = (req, res) => {
  // Handle empty text
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  res.status(200).json({ message: "Set Goals" });
};

/**
 * @desc  PUT goals
 * @route PUT /api/goals/:id
 * @access Private
 */
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

/**
 * @desc  DELETE goals
 * @route DELETE /api/goals/:id
 * @access Private
 */
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
