import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './admin-login-form.css';

const AdminLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your login logic here
  };

  return (
    <div className="admin-login-form-container">
      <Helmet>
        <title>Admin Login</title>
      </Helmet>
      <div className="admin-login-form-admin-login-form">
        <div className="admin-login-form-frame229">
          <img
            src="/external/downloadremovebgpreview12021-0ngd-400w.png"
            alt="Logo"
            className="admin-login-form-downloadremovebgpreview1"
          />
          <span className="admin-login-form-text1">Brain Station 23</span>
          <span className="admin-login-form-text2">Library</span>
          <span className="admin-login-form-text3">
            Your Premier Digital Library for Exploring Technical, Training, and IT Books
          </span>
        </div>

        <div className="admin-login-form-content">
          <form onSubmit={handleSubmit}>
            <span className="admin-login-form-text4">
              Please enter your credentials to log in
            </span>

            <div className="admin-login-form-frame2">
              <label htmlFor="username" className="admin-login-form-text5">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="input-field"
              />
            </div>

            <div className="admin-login-form-frame3">
              <label htmlFor="password" className="admin-login-form-text6">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="input-field"
              />
            </div>

            <div className="admin-login-form-frame242">
              <span className="admin-login-form-text7">Forgot password?</span>
            </div>

            <span className="admin-login-form-text8">Welcome Back !!</span>

            <div className="admin-login-form-group16">
              <button type="submit" className="login-button">
                LOG IN
              </button>
            </div>
          </form>

          <div className="admin-login-form-group133550">
            <img
              src="/external/subtract2093-ascd.svg"
              alt="Design Element 1"
              className="admin-login-form-subtract1"
            />
            <img
              src="/external/subtract2093-pjn.svg"
              alt="Design Element 2"
              className="admin-login-form-subtract2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;