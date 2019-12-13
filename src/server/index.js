// This is the server side code, essential for the functioning of the app.

import React from "react";
import ReactDOM from "react-dom";

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");


const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Decide the port to listen
let port = process.env.PORT;

if(port == null || port == "") {
    port = 3000;
}

import App from "../components/App";
ReactDOM.render(<App />, document.getElementById("root"));

app.listen(port, function() {
    console.log("Server started at port 3000");
});