import React from 'react';
import Logo from '../images/logo.jpg';

const Signup = () => {
    return (
        <div>
            <div class="split left">
                <div class="centered">
                    <img src={Logo} alt="Logo"></img>
                </div>
            </div>

            <div class="split right">
                <div class="centered">
                    <h2 class="loginHeading">Create Account</h2>
                    <div class="mb-3">
                        <input type="firstName" class="form-control loginInput" placeholder="First Name"></input>
                    </div>
                    <div class="mb-3">
                        <input type="lastName" class="form-control loginInput" placeholder="Last Name"></input>
                    </div>
                    <div class="mb-3">
                        <input type="username" class="form-control loginInput" placeholder="Create a username"></input>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control loginInput" placeholder="Email address"></input>
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control loginInput" placeholder="Create a password"></input>
                    </div>
                    <button>Create Account</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;