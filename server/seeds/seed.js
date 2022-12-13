const sequelize = require('../config/connection');
const { Answer, Question, User } = require('../models');
const userSeeds = require('./userSeed.json');
const questionsSeeds = require('./questionSeed.json');
const answerSeeds = require('./answerSeeds.json')

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userSeeds);
    await Question.bulkCreate(questionsSeeds);
    await Answer.bulkCreate(answerSeeds)

    console.log('seeding complete');
    process.exit(0)
};

seedAll();