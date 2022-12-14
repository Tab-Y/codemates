import React from 'react';
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
  const [currentPage, handlePageChange] = useState("Landing");

  //Render page function to switch statement
  const renderPage = () => {
    switch (currentPage) {
      case "Login":
        return <Login />;
      
      case "NewAnswer":
        return <NewAnswer />
      
      case "NewProblem":
        return <NewProblem />

      case "PostedProblems":
        return <PostedProblems />

      case "Profile":
        return <Profile />

      case "SavedProblems":
        return <SavedProblems /> 

      case "Signup":
        return <Signup />

      case "SingleProblem":
        return <SingleProblem /> 

      case "SolvedProblems":
        return <SolvedProblems />    
        
      default: return <Landing />;
    }
  };

  return (
    <React.Fragment>

    <div>
        <main>
            <Nav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <div>{renderPage(currentPage)}</div>
        </main>
    </div>
    
    <Footer></Footer>
    </React.Fragment>
    
);
}


export default App;
