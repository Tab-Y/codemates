import React from 'react';
import Logo from '../images/logo.jpg';

const Home = () => {
    return (
        <div>
  <header>
    <img src={Logo} alt="Logo"></img>
    <div class="p-5 text-center" style={{backgroundColor: "#c4fff9"}}>
      <h1 class="mb-3">Welcome to Codemates</h1>
      <h4 class="mb-3">Get started by searching for problems to solve!</h4>
    </div>
  </header>
  <main>
  <div class="container">
    <div class="row">
      <div class="col-4" style={{width: "18rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <input type="search" class="form-control searchInput" style={{width: "16rem", marginTop: "1rem", marginBottom: "1rem", backgroundColor: "#c4fff9"}}
          placeholder="Search"></input>
        <div class="card" style={{width: "16rem"}}>
          <div class="card-header text-center" style={{backgroundColor: "#c4fff9"}}>
            Filter your search
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" style={{backgroundColor: "#c4fff9"}}><input type = "checkbox"></input> Newest</li>
            <li class="list-group-item" style={{backgroundColor: "#c4fff9"}}><input type = "checkbox"></input> Oldest</li>
            <li class="list-group-item" style={{backgroundColor: "#c4fff9"}}><input type = "checkbox"></input> Unanswered</li>
            <li class="list-group-item" style={{backgroundColor: "#c4fff9"}}><input type = "checkbox"></input> Paid</li>
          </ul>
        </div>
        <button style={{width: "10rem", marginTop: "1rem"}}>Apply filters</button>
      </div>
      <div class="col-8">
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <h1 style={{color: "#c4fff9"}}>All Problems</h1>
        <button>Create New Problem</button>
      </div>
        <div class="card homeCards" style={{width: "38rem"}}>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" style={{backgroundColor: "#c4fff9"}}>Why can't I change the text color of an a tag?</li>
            <li class="list-group-item" style={{backgroundColor: "#c4fff9"}}>Oldest</li>
            <li class="list-group-item" style={{backgroundColor: "#c4fff9"}}>Unanswered</li>
            <li class="list-group-item" style={{backgroundColor: "#c4fff9"}}>Paid</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</main>
</div>
        );
    };
    
export default Home;