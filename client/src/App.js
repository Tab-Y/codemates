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
    <React.Fragment>

    <div>
        <main>

            <Navbar
                renderLanding={() => handlePageChange('landing')}
                renderLogin={() => handlePageChange('Login')}
                renderNewAnswer={() => handlePageChange('NewAnswer')}
                renderNewProblem={() => handlePageChange('NewProblem')}
                renderPostedProblems={() => handlePageChange('PostedProblems')}
                renderProfile={() => handlePageChange('Profile')}
                renderSavedProblems={() => handlePageChange('SavedProblems')}
                renderSignup={() => handlePageChange('Signup')}
                renderSingleProblem={() => handlePageChange('SingleProblem')}
                renderSolvedProblems={() => handlePageChange('SolvedProblems')}
                active={currentPage}
            />
            <div>
              {currentPage === "Login" ? (
                <Login
                renderSignup={() => handlePageChange('Signup')}
                renderProfile={() => handlePageChange('Profile')}
                />
              ) : currentPage === "NewAnswer" ? (
                <NewAnswer />
              ) : currentPage === "NewProblem" ? (
                <NewProblem />
              ) : currentPage === "PostedProblems" ? (
                <PostedProblems />
              ) : currentPage === "Profile" ? (
                <Profile />
              ) : currentPage === "SavedProblems" ? (
                <SavedProblems />
              ) : currentPage === "Signup" ? (
                <Signup />
              ) : currentPage === "SingleProblem" ? (
                <SingleProblem /> 
              ) : currentPage === "SolvedProblems" ? (
                <SolvedProblems />
              ) : (<Landing
                renderLogin={() => handlePageChange('Login')}
                renderSignup={() => handlePageChange('Signup')}
              />)}
              </div>
        </main>
    </div>
    
    <footer>Thanks for visiting!</footer>

            {/* <Nav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            /> */}
            <div>{renderPage(currentPage)}</div>
        </main>
    </div>
    
    {/* <Footer></Footer> */}

    </React.Fragment>
    
);
}


export default App;
