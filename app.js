//Author: Varun Pasupuleti

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");

const app = express();

app.use('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    const date = new Date();
    const numDay = date.getDay();
    var day = "";
    switch(numDay)
    {
        case 0:
            day = "Sunday";
        case 1:
            day = "Monday";
        case 2:
            day = "Tuesday";
        case 3:
            day = "Wednesday";
        case 4:
            day = "Thursday";
        case 5:
            day = "Friday";
        case 6:
            day = "Saturday";
    }
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function() {
    console.log("Server running on local host 3000");
});