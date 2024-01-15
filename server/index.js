const express = require("express");
const app = express();
const port = 5000;
const questions = require("./routes/questions");

// parsing application/json
app.use(express.json());

// Define a route
app.use("/api", questions);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
