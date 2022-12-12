const { Question, Answer } = require('../models'); // gets the needed model for this controller

module.exports = {
    // functions for each route
    getQuestions(req, res) {
        Question.find()
        .then((questions) => res.json(questions))
        .catch ((err) => res.status(500).json(err))
    },

    getSingleQuestion(req, res) {
        Question.findOne({ _id: req.params.questionId })
        .then((questions) => 
        !questions ? res.status(404).json({ message: `I'm sorry. We seem to have missed your question. Please check we have the right Id`}) : res.json(questions))
        .catch((err) => res.status(500).json(err));
    },

    createQuestion(req, res) {
        Question.create(req.body)
        .then((questions) => res.json(questions))
        .catch((err) => res.status(500).json(err))
    },

    updateQuestion(req, res) {
        Question.findOneAndUpdate(
            { _id: req.params.questionId },
            { $set: req.body },
            { runValidators: true, new: true },
        )
        .then((question) => 
        !question ? res.status(404).json({ message: `Something went wrong and we can't seem to find this question. Please try again.`}) : res.json(question))
        .catch((err) => res.status(500).json(err));
    },

    deleteQuestion(req, res) {
        Question.findOneAndDelete({ _id: req.params.questionId })
        .then((question) => 
        !question ? res.status(404).json({ message: 'Question not found'}) : Question.deleteMany({ _id: { $in: question.answers }}))
        .then(res.status(200).json({ message: "This question is no more."}))
        .catch((err) => res.status(500).json(err));
    },


}