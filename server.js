const express = require('express');
const path = require('path');
const routes = require('./routes');
const passport = require('./config/passport');
const logger = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config/extra-config');
const session = require('express-session');
const mongoose = require('mongoose');

const app = express();

const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3002;

// Enable CORS from client-side

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
	res.header('Access-Control-Allow-Credentials', 'true');
	next();
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

const authCheck = require('./config/middleware/authenticationStatus.js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);

// Define API routes here

app.use(cors());

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || MONGODB_URI || 'mongodb://localhost/GerrasDetailingUser', () => {
    console.log('Successful Connect to DB');
});

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
