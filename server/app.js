const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const router = require('./controllers/');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(router);

app.use(favicon(join(__dirname, '..', 'client', 'build', 'favicon.ico')));
app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.get('/*', function (req, res) {
	res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.set('port', process.env.PORT || 4000);

module.exports = app;
