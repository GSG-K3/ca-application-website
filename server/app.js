const express = require("express");
const {join}= require('path')
const cookieParser = require("cookie-parser");
const router = require("./controllers");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router);

// app.use(express.static(join()))

module.exports = app;