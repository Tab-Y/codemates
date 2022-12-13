const path = require('path');
// const router = require('express').Router();
// // const apiRoutes = require('./api');
// const homeRoutes = require('./home')

// // router.use('/api', apiRoutes);
// router.use('/', homeRoutes);

module.exports = (app) =>
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '../../client/build/index.html')));