const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('view engine', 'ejs');

app.get("/", (req, res) => {
    app.send("hello");
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});