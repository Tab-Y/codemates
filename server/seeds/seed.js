const db = require('../config/connection');
const { Answer, Question, User } = require('../models');
const userSeeds = require('./userSeed.json');
const questionsSeeds = require('./questionSeed.json');
const answerSeeds = require('./answerSeed.json');


db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Question.deleteMany({});
        await Answer.deleteMany({});


        await User.create(userSeeds);
        await Question.create(questionsSeeds);
        await Answer.create()


    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('seeding complete');
    process.exit(0)
});