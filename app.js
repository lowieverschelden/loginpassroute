// app.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const session = require('express-session');
const middlewares = require('./middlewares');
const routes = require('./routes');

dotenv.config();  // Laadt de .env bestand

const app = express();

// Gebruik body-parser en session middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

// Gebruik de middlewares en routes
middlewares.setupAPP(app);
routes.setup(app);

// Start de server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
