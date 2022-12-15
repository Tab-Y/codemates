import React from 'react';
import Logo from '../images/logo.jpg';

const Login = ({ renderSignup, renderProfile }) => {
    return (
        <div>
        <div class="split left">
            <div class="centered">
              <img src={Logo} alt="Logo"></img>
            </div>
          </div>
          
          <div class="split right">
            <div class="centered">
              <h2 class="loginHeading">Login</h2>
              <div class="mb-3">
                <input type="email" class="form-control loginInput" placeholder="Email address"></input>
              </div>
              <div class="mb-3">
                <input type="password" class="form-control loginInput" placeholder="Password"></input>
            </div>
              <button onClick={renderProfile}>Login</button>
              <p>Need to create an account? <a onClick={renderSignup}>Create account</a></p>
            </div>
          </div>
        </div>
        );
    };
    
    export default Login;