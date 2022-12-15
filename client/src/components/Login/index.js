import React from 'react';
import Logo from '../images/logo.jpg';
import { Link } from "react-router-dom";


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
              <h3 class="loginHeading">Login</h3>
              <div class="mb-3">
                <input type="email" class="form-control loginInput" placeholder="Email address"></input>
              </div>
              <div class="mb-3">
                <input type="password" class="form-control loginInput" placeholder="Password"></input>
            </div>
              <button ><Link to=""></Link>Login</button>
              <p>Need to create an account? <a><Link to="/signup">Create account</Link></a></p>
            </div>
          </div>
        </div>
        );
    };
    
    export default Login;