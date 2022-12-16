const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    email: String
    firstName: String
    lastName: String
    karma: Number
    questions: [Question]
  }

  type Question {
    _id: ID
    questionContent: String
    createdAt: Date
    username: String
    answers: [answerSchema]
  }

  type Answer {
    _id: ID
    answerId: String
    answerContent: String
    username: String
    createdAt: Date
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
    question(username: String!): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
