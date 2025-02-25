const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the "templates" directory
app.use(express.static(path.join(__dirname, "templates")));

// Serve static files from the "css" directory
app.use("/css", express.static(path.join(__dirname, "css")));

// Serve static files from the "images" directory
app.use("/images", express.static(path.join(__dirname, "images")));

// Route for the login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "login.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});