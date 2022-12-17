const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    email: String!
    firstName: String
    lastName: String
    karma: Int
    questions: [Question]
  }

  type Question {
    _id: ID!
    questionContent: String!
    createdAt: String!
    username: String!
    answers: [answerSchema]
    answerCount: Int
  }

  type answerSchema {
    answerId: String!
    answerContent: String!
    username: String!
    createdAt: String!
    count: Int!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    questions: [Question]
    question(username: String!): Question
  }

  type Mutation {
    createUser(username: String!, password: String!, firstName: String!, lastName: String!, email: String!): User
    updateUser(_id: ID! username: String!, password: String!, firstName: String!, lastName: String!, email: String!): User
    deleteUser(_id: ID!): User
    login(username: String!, password: String!): Auth
    addQuestion(questionContent: String!): Question
    addAnswer(answerId: String!, answerContent: String!): Answer
    removeQuestion(questionId: ID!)
    removeAnswer(questionId: ID!, answerId; ID!)
  }
  
`;

module.exports = typeDefs;
