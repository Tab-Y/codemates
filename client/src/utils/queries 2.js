import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      questions {
        _id
        questionContent
        createdAt
      }
    }
  }
`;

export const QUERY_QUESTIONS = gql`
  query getQuestions {
    questions {
      _id
      questionContent
      username
      createdAt
    }
  }
`;

export const QUERY_SINGLE_QUESTION = gql`
  query getSingleQuestion($questionId: ID!) {
    question(questionId: $questionId) {
      _id
      questionContext
      username
      createdAt
      answers {
        _id
        answerContent
        username
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      questions {
        _id
        questionContent
        username
        createdAt
      }
    }
  }
`;