const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const routes = require('./routes/index');
var Promise = require('bluebird');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
    session({
        secret: 'mojaPasjaArduino',
        resave: false,
        saveUninitialized: true,
        cookie: {}
    })
);
app.use(flash());

app.use('/', routes);

module.exports = app;
