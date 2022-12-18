//imports
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Login from './components/Login';
import NewAnswer from './components/NewAnswer';
import NewProblem from './components/NewProblem';
import PostedProblems from './components/PostedProblems';
import Profile from './components/Profile';
import SavedProblems from './components/SavedProblems';
import Signup from './components/Signup';
import SingleProblem from './components/SingleProblem';
import SolvedProblems from './components/SolvedProblems';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});


// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {

  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({

  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  // Set state default to Home
  // const [currentPage, handlePageChange] = useState("landing");

  // useState functions for button/ nav onClick()
  // ---------------------------------------------------------------
  // renderLanding={() => handlePageChange('landing')}
  // renderLogin={() => handlePageChange('Login')}
  // renderNewAnswer={() => handlePageChange('NewAnswer')}
  // renderNewProblem={() => handlePageChange('NewProblem')}
  // renderPostedProblems={() => handlePageChange('PostedProblems')}
  // renderProfile={() => handlePageChange('Profile')}
  // renderSavedProblems={() => handlePageChange('SavedProblems')}
  // renderSignup={() => handlePageChange('Signup')}
  // renderSingleProblem={() => handlePageChange('SingleProblem')}
  // renderSolvedProblems={() => handlePageChange('SolvedProblems')}
  // active={currentPage}
  // ---------------------------------------------------------------

  return (
    <ApolloProvider client={client}>
      <Router>

        <React.Fragment>

          <div>

            <main>

              <Navbar />

              <Routes>

                <Route
                  path='/'
                  element={<Landing />}
                />

                <Route
                  path='/Login'
                  element={<Login />}
                />

                <Route
                  path='/Signup'
                  element={<Signup />}
                />

                <Route
                  path='/Profile'
                  element={<Profile />}
                />

                <Route
                  path='/NewProblem'
                  element={<NewProblem />}
                />

                <Route
                  path='/PostedProblems'
                  element={<PostedProblems />}
                />

                <Route
                  path='/SavedProblems'
                  element={<SavedProblems />}
                />

                <Route
                  path='/SingleProblem'
                  element={<SingleProblem />}
                />

                <Route
                  path='/SolvedProblems'
                  element={<SolvedProblems />}
                />

                <Route
                  path='/NewAnswer'
                  element={<NewAnswer />}
                />

                <Route
                  path='/About'
                  element={<About />}
                />

                <Route
                  path='/Home'
                  element={<Home />}
                />

              </Routes>

            </main>

          </div>

          <footer>Thanks for visiting!</footer>

        </React.Fragment>

      </Router>
      
    </ApolloProvider>
  );
}


export default App;