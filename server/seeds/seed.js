const db = require('../config/connection');
const { Answer, Question, User } = require('../models');
const userSeeds = require('./userSeed.json');
const questionsSeeds = require('./questionSeed.json');


db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Question.deleteMany({});


        await User.create(userSeeds);
        await Question.create(questionsSeeds);


    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('seeding complete');
    process.exit(0)
});