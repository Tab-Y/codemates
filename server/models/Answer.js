const { Schema, model } = require('mongoose');

const answerSchema = new Schema(
    {

    },
    {                               // as shown in assignment 26
        toJSON: {
          getters: true,
        },
        id: false,
      },
)

module.exports = answerSchema;