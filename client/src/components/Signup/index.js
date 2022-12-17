import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.jpg';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
  
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
    return (
        <div>
            <div className="split left">
                <div className="centered">
                    <img src={Logo} alt="Logo"></img>
                </div>
            </div>

            <div className="split right">
                <div className="centered">
                    <h3 className="loginHeading">Create Account</h3>
                    {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                        <input name="firstName" type="firstName" className="form-input loginInput" placeholder="Enter your first name" value={formState.firstName} onChange={handleChange}></input>
                        </div>
                        <div className="mb-3">
                        <input name="lastName" type="lastName" className="form-input loginInput" placeholder="Enter your last name" value={formState.lastName} onChange={handleChange}></input>
                        </div>
                <div className="mb-3">
                        <input name="username" type="username" className="form-input loginInput" placeholder="Create a username" value={formState.name} onChange={handleChange}></input>
                        </div>
                        <div className="mb-3">
                        <input name="email" type="email" className="form-input loginInput" placeholder="Enter your email" value={formState.email} onChange={handleChange}></input>
                        </div>
                        <div className="mb-3">
                        <input name="password" type="password" className="form-input loginInput" placeholder="Create a password" value={formState.password} onChange={handleChange}></input>
                        </div>
                    <button>Create Account</button>
                    </form>
            )}
                   {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
              <p>Already have an account? <Link to="/login">Login to existing account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;