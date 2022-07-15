var express = require("express");
var app = express();

var museos_json = require('./data/museos-cdmx.json');

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/museos", (req, res, next) => {
 res.json(museos_json);
});
