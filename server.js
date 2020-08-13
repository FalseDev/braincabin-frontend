const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
