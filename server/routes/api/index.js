const router = require('express').Router();
// routes
const usersRoute = require('./users')

// router.use('/route', routes)
router.use('/users', usersRoute)

module.exports = router;