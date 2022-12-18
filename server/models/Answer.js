const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const answerSchema = new Schema(
    {
        answerId: {
            type: Schema.Types.ObjectId,
            default: () => Types.ObjectId(),
        },

        answerContent: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 280,
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },

    },

    {
        toJSON: {
            getters: true,
        },
        id: false,
    },
    
);

const Answer = model('Answer', answerSchema);

module.exports = Answer;