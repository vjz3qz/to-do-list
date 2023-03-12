//Author: Varun Pasupuleti

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    const date = new Date();
    res.render("list",{dayOfWeek:today.toLocaleDateString("en-US", options)});
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});
