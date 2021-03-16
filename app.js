const port = 8080;
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Babynest admin listening to port ${port}`);
});

