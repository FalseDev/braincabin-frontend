var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 4000;
var app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(function (req, res, next) {
    res.sendFile(path.join(__dirname, "build/index.html"));
});
app.listen(PORT, function () {
    console.log("Listening at port " + PORT);
});
