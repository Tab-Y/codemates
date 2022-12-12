const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please use a valid email."],        // validates email
        },
        questions: [{
            type: Schema.Types.ObjectId,
            ref: "question"
        }],
        answers: [{
            type: Schema.Types.ObjectId,
            ref: 'answer'
        }],
        karma: {
            type: Number,
            min: 0,
        }
    },
    {                               // as shown in assignment 26
        toJSON: {
            getters: true,
        },
        id: false,
    },
)



const User = model('user', userSchema);

module.exports = User;