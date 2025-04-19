import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom'; // ✅ v5 compatible
import { Link } from 'react-router-dom';
import './admin-login-form.css';
import logo from '../assets/logo.png';
const AdminLoginForm = (props) => {
  const history = useHistory(); // ✅ v5 compatible
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dummy login check — customize as needed
    if (username === 'admin' && password === 'admin123') {
      history.push('/admin-dashboard'); // ✅ redirect on success
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="admin-login-form-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="admin-login-form-admin-login-form">
        <div className="admin-login-form-frame229">
        <img
  src={logo}
  alt="Brain Station 23 Logo"
  className="admin-login-form-downloadremovebgpreview1"
/>
          <span className="admin-login-form-text1">Brain Station 23</span>
          <span className="admin-login-form-text2">Library</span>
          <span className="admin-login-form-text3">
            Your Premier Digital Library for Exploring Technical, Training, and IT Books
          </span>
        </div>
        <span className="admin-login-form-text4">
          Please enter your credentials to log in
        </span>

        <div className="admin-login-form-frame2">
          <span className="admin-login-form-text5">Username</span>
          <input
            type="text"
            className="admin-login-form-input"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="admin-login-form-frame3">
          <span className="admin-login-form-text6">Password</span>
          <input
            type="password"
            className="admin-login-form-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="admin-login-form-frame242">
        <Link to="/admin-forgot-password-form" className="admin-login-form-text7">
  Forgot password?
</Link>
        </div>

        <span className="admin-login-form-text8">Welcome Back !!</span>

        <div className="admin-login-form-group16" onClick={handleLogin}>
          <span className="admin-login-form-text9">LOG IN</span>
        </div>

        <div className="admin-login-form-group133550">
          <img
            src="/external/subtract2093-ascd.svg"
            alt="Subtract2093"
            className="admin-login-form-subtract1"
          />
          <img
            src="/external/subtract2093-pjn.svg"
            alt="Subtract2093"
            className="admin-login-form-subtract2"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm; 