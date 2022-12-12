const express = require('express');
const path = require('path');
const routes = require('./routes');
const { authMiddleware } = require('./utils/auth');                                 // middleware to verify users
const {  } = require('./controllers');                                              // controllers
const db = require('./config/connection');                                          // database connection

const PORT = process.env.PORT || 3001;                                              // sets port to work on deployment and locally
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '../client/images')));       // loads static assets

if (process.env.NODE_ENV === 'production') {                                        // checks if app is in production build
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);                                                                    // uses routes folder

db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
  });