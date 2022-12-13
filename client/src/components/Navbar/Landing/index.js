import React from 'react';
import Logo from '../images/logo.jpg';

const Landing = () => {
    return (
        <div>
        <div class="split left">
        <div class="centered">
          <img src={Logo} alt="Logo"></img>
        </div>
      </div>
      
      <div class="split right">
        <div class="centered">
          <h2>Welcome</h2>
          <p id="welcomePara">This is a social, coder community designed to connect fellow coders to post and solve issues for one another. Build up karma points by solving problems for fellow coders, post your own problems for help, and get to know your fellow codemates. Sign up now!</p>
          <button>Sign up</button>
          <button>Login</button>
        </div>
      </div>
      </div>
        );
    };
    
    export default Landing;