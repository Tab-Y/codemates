const { Schema, model } = require('mongoose');
const { answerSchema } = require('./Answer');
const dateFormat = require('../utils/dateFormat');

const questionSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
        username: {
            type: String,
            required: true,
        },
        answers: {
            type: [answerSchema],
        },
    },
    {                               // as shown in assignment 26
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
)

questionSchema.virtual('answerCount').get( () => {
    return this.answers.length;
});

const Question = model('question', questionSchema)

module.exports = Question;