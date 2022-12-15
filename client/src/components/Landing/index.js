import React from 'react';
import Logo from '../images/logo.jpg';
import { Link } from "react-router-dom";

const Landing = ({ renderSignup, renderLogin }) => {
    return (
        <div>
        <div class="split left">
        <div class="centered">
          <img src={Logo} alt="Logo"></img>
        </div>
      </div>
      
      <div class="split right">
        <div class="centered">
          <h3>Welcome</h3>
          <p id="welcomePara">This is a social, coder community designed to connect fellow coders to post and solve issues for one another. Build up karma points by solving problems for fellow coders, post your own problems for help, and get to know your fellow codemates. Sign up now!</p>
          <button><Link to="/signup">Sign up</Link></button>
          <button><Link to="/login">Login</Link></button>
        </div>
      </div>
      </div>
        );
    };
    
    export default Landing;