const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Answer = require('./Answer');
const Question = require('./Question');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },

    firstName: {
        type: String,
        unique: true,
        trim: true,
    },
    
    lastName: {
        type: String,
        unique: true,
        trim: true,
    },

    questions: [ Question.schema ],
//     questions: [
//         {
//             type: Schema.Types.ObjectId,
//             ref: 'Question'
//         }
//     ]
// },
// {
//     toJSON: {
//         virtuals: true,
//     },
// }
    answers: [ Answer.schema ],
    karma: {
        type: Number,
    }
    
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;