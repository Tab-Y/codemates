const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connections');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 30 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {                                // checks for production build
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {                                                // single page
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});