const Question = require('./Question');
const Answer = require('./Answer');
const User = require('./User');

User.hasMany(Question, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.hasMany(Answer, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Question.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Answer.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})
Question.hasMany(Answer, {
    foreignKey: 'answerId',
    onDelete: 'CASCADE'
})

Answer.belongsTo(Question, {
    foreignKey: 'answerId'
})

module.exports = { Question, Answer, User }