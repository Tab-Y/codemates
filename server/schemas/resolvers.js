const { AuthenticationError } = require('apollo-server-express');
const { User, Question } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('questions');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('questions');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('questions');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    questions: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Question.find(params).sort({ createdAt: -1 });
    },
    questions: async (parent, { questionId }) => {
      return Question.findOne({ _id: questionId });
    },
  },
  Mutation: {
    addUser: async (parent, { username, password, email, firstName, lastName, karma, questions }) => {
      const user = await User.create({ username, password, email, firstName, lastName, karma, questions });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addQuestion: async (parent, { questionContent }, context) => {
      if (context.user) {
        const question = await Question.create({
          questionContent,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { questions: question._id } }
        );

        return question;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addAnswer: async (parent, { questionId, answerContent }, context) => {
      if (context.user) {
        return Question.findOneAndUpdate(
          { _id: questionId },
          {
            $addToSet: {
              answers: { answerContent, username: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeQuestion: async (parent, { questionId }, context) => {
      if (context.user) {
        const question = await Question.findOneAndDelete({
          _id: questionId,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { questions: thought._id } }
        );

        return question;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeAnswer: async (parent, { questionId, answerId }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: questionId },
          {
            $pull: {
              comments: {
                _id: answerId,
                username: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  }
};

module.exports = resolvers;
