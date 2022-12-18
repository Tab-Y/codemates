const { Schema, model, Types } = require('mongoose');
// const { answerSchema } = require('./Answer');
const dateFormat = require('../utils/dateFormat');

const questionSchema = new Schema(
    {
        questionContent: {
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
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Answer',
                   
                    // maybe we need to add boolean here to determine if this answer is the solution
                    // so something like "isSolution: { type: Boolean, default: false }
                    // found this example to update it as true like this: "MyModel.update({},{"$set":{"isSolution":false}}"
                },
                
            ],

        },

    },

    {                               // as shown in assignment 26
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
    
)

questionSchema.virtual('answerCount').get(() => {
    return this.answers.length;
});

const Question = model('question', questionSchema)

module.exports = Question;