const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/create", (req, res) => {
  res.send("Create reminder!");
});

// app.delete("/delete", (req, res) => {
//   res.send("Delete reminder!");
// });

app.listen(port, () => {
  console.log(`Reminder app is listening on http://localhost:${port}`);
});
