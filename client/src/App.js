import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import Notification from './components/Notification';
import Favorites from './components/Favorites';
import Profile from './components/Profile';
import Saves from './components/Saves'

function App() {
  return (

//Set state default to Home
const [currentPage, handlePageChange] = useState("Home");

//Render page function to switch statement
const renderPage = () => {
  switch (currentPage) {
    case "Search":
      return <Search />;
    case "Notification":
      return <Notification />
    case "Favorites":
      return <Favorites />
      case "Profile":
        return <Profile />
      case "Saves":
        return <Saves />
    default: return <Home />;
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



    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
