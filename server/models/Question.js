const { Schema, model } = require('mongoose');

const questionSchema = new Schema(
    {

    },
    {                               // as shown in assignment 26
        toJSON: {
            getters: true,
        },
        id: false,
    },
)

const Question = model('question', questionSchema)

module.exports = Question;