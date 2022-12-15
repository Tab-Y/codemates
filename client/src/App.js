import React, { useState } from 'react';
import logo from './logo.svg';
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  //Set state default to Home
  const [currentPage, handlePageChange] = useState("landing");

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

            </Routes>
          </main>
        </div>

        <footer>Thanks for visiting!</footer>
      </React.Fragment>
    </Router>

  );
}


export default App;
