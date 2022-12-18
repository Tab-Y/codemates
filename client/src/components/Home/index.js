import React from 'react';
import Logo from '../images/logo.jpg';

const Home = () => {
  return (

    <div>

      <header>

        <img src={Logo} alt="Logo"></img>

        <div className="p-5 text-center" style={{ backgroundColor: "#c4fff9" }}>
          <h3 className="mb-3">Welcome to Codemates</h3>
          <h5 className="mb-3">Get started by searching for problems to solve!</h5>
        </div>

      </header>

      <div className="container">

        <div className="row">

          <div className="col-4" style={{ width: "18rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <input type="search" className="form-control searchInput" style={{ width: "16rem", marginTop: "1rem", marginBottom: "1rem", backgroundColor: "#c4fff9" }}
              placeholder="Search">
            </input>

            <div className="card" style={{ width: "16rem" }}>

              <div className="card-header text-center" style={{ backgroundColor: "#c4fff9" }}>
                Filter your search
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{ backgroundColor: "#c4fff9" }}><input type="checkbox"></input> Newest</li>
                <li className="list-group-item" style={{ backgroundColor: "#c4fff9" }}><input type="checkbox"></input> Oldest</li>
                <li className="list-group-item" style={{ backgroundColor: "#c4fff9" }}><input type="checkbox"></input> Unanswered</li>
                <li className="list-group-item" style={{ backgroundColor: "#c4fff9" }}><input type="checkbox"></input> Paid</li>
              </ul>

            </div>

            <button style={{ width: "10rem", marginTop: "1rem" }}>Apply filters</button>

          </div>

          <div className="col-8">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 style={{ color: "#c4fff9" }}>All Problems</h1>
              <button>Create New Problem</button>
            </div>

            <div className="card homeCards" style={{ width: "38rem" }}>

              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{ backgroundColor: "#c4fff9" }}>Why can't I change the text color of an a tag?</li>
                <li className="list-group-item" style={{ backgroundColor: "#c4fff9" }}>Oldest</li>
                <li className="list-group-item" style={{ backgroundColor: "#c4fff9" }}>Unanswered</li>
                <li className="list-group-item" style={{ backgroundColor: "#c4fff9" }}>Paid</li>
              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;