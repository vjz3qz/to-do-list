//Author: Varun Pasupuleti

//imports
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");

//global variable
var items = [];

//server
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//initial get request
app.get("/", (req, res) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    const date = new Date();
    res.render("list",{dayOfWeek:today.toLocaleDateString("en-US", options), itemList:items});
});

//post request
app.post("/", (req,res) => {
    items.push(req.body.newItem)
    res.redirect("/"); //redirects to get request with new item
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});
