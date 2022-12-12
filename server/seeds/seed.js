const db = require('../config/connection');
const {  } = require('../models');
const userSeeds = require('./userSeed.json');

db.once('open', async () => {
    try {
        // await deletes

        // await create

        // run seed for problems
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
    console.log('seeding complete');
    process.exit(0)
})