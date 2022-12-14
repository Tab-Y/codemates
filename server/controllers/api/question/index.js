const router = require('express').Router();
const answerRoute = require('./answerRoute');
const questionRoute = require('./questionRoute');

router.use('/answer', answerRoute);
router.use('/question', questionRoute);

module.exports = router;