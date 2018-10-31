const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
// parse app/json
app.use(bodyParser.json());
//database
const {inserNewUser} = require("../database/realmSchema");

app.get("/", (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.send({
        status: "Success",
        name: "thjen developer",
        sms: "This is root path realm demo",
    });
});

module.exports = {
    app,
};