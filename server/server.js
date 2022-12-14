const path = require('path');
const express = require('express');
const session = require('express-session');


const sequelize = require('./config/connection');

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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const routes = require('./controllers')

app.use(routes)

// require('./controllers/index')(app);

// sync is currently breaking server starting

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => 
    console.log(`App listening on port ${PORT}!`)
  )
})

