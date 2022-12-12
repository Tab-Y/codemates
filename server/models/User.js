const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
        firstName: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            unique: true,
            required: true,
            trim: true,
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
        },

    },
    {                               // as shown in assignment 26
        toJSON: {
            getters: true,
        },
        id: false,
    },
)

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('user', userSchema);

module.exports = User;