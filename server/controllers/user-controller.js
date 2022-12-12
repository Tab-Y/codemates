const { User } = require('../models'); // gets the needed model for this controller

module.exports = {
    // functions for each route
    getUsers(req, res) {                    // gets all users
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')                 // mongoose version flag
        .then((user) => 
        !user ? res.status(404).json({ message: 'User not found'}) : res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },         // what is being looked for
            { $set: req.body },                 // updates to include
            { runValidators: true, new: true },
        )
        .then((user) => 
        !user ? res.status(404).json({ message: 'User not found'}) : res.status(200).json({ message: "This user has been made anew."})
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) => 
        !user ? res.status(404).json({ message: 'User not found'}) : Thought.deleteMany({ _id: { $in: user.thoughts }}))
        .then(res.status(200).json({ message: "This user and their thoughts are no more."}))
        .catch((err) => res.status(500).json(err));
    }
}