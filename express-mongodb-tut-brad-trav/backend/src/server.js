const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Import middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

// Use Error middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
