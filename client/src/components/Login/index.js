import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Logo from '../images/logo.jpg';

import Auth from '../../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
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
          <div >
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div class="mb-3">
                <input name="email" type="email" className="form-input" class="loginInput" placeholder="Email address" value={formState.email} onChange={handleChange}></input>
                </div>
                <div class="mb-3">
                <input name="password" type="password" className="form-input" class="loginInput" placeholder="Password" value={formState.password} onChange={handleChange}></input>
                </div>
                <button ><Link to=""></Link>Login</button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
            <p>Need to create an account? <a><Link to="/signup">Create account</Link></a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;