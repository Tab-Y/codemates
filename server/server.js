const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schema')
const db = require('./config/connection');                                          

const PORT = process.env.PORT || 3001;                                              
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use('/images', express.static(path.join(__dirname, '../client/images')));       

if (process.env.NODE_ENV === 'production') {                                        
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer(typeDefs, resolvers);