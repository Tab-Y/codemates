const router = require('express').Router();
const userRoute =require('./userRoute.js');

router.use('/user', userRoute)

module.exports = router;