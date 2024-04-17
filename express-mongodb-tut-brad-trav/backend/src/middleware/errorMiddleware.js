/**
 * Error handling middleware for Express applications.
 * This middleware function catches and handles errors that occur during the processing of requests.
 * It sets an appropriate HTTP status code and returns a JSON object with error details.
 *
 * @param {Error} err - The error object that was thrown or passed to next() from earlier middleware or route handlers.
 * @param {Request} req - The Express request object. Used here for completeness and potential future use, but not directly in the function.
 * @param {Response} res - The Express response object. Used to set the status code and send the error response.
 * @param {Function} next - The next middleware function in the stack. Not used in this handler as the function aims to conclude the response cycle.
 */
const errorHandler = (err, req, res, next) => {
  // Set the determined status code on the response.
  const statusCode = res.statusCode || 500;
  res.status(statusCode);

  // Send the error information back to the client as JSON. In production, omit the stack for security
  res.json({
    type: err.type,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
