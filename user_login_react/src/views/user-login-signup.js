import React from 'react'

import { Helmet } from 'react-helmet'

import './user-login-signup.css'
import { Link } from 'react-router-dom'
const UserLoginSignup = (props) => {
  return (
    <div className="user-login-signup-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="user-login-signup-user-login-signup">
        <div className="user-login-signup-admin-login-form">
          <div className="user-login-signup-frame229">
            <span className="user-login-signup-text10">Brain Station 23</span>
            <span className="user-login-signup-text11">Library</span>
            <span className="user-login-signup-text12">
              Your Premier Digital Library for Exploring Technical, Training,
              and IT Books
            </span>
          </div>
          <span className="user-login-signup-text13">
            Please enter your credentials to log in
          </span>
          <div className="user-login-signup-frame2">
            <span className="user-login-signup-text14">Username</span>
          </div>
          <div className="user-login-signup-frame3">
            <span className="user-login-signup-text15">Password</span>
          </div>
          <div className="user-login-signup-frame242">
          <Link to="/forgotpassword" style={{ textDecoration: 'none' }}>
  <span className="user-login-signup-text16" style={{ cursor: 'pointer' }}>
    Forgot password?
  </span>
</Link>
          </div>
          <span className="user-login-signup-text17">Welcome Back !!</span>
          <div className="user-login-signup-group16">
            <div className="user-login-signup-group1335621"></div>
            <div className="user-login-signup-group1335622"></div>
            <span className="user-login-signup-text18">LOG IN</span>
          </div>
          <div className="user-login-signup-group133550">
            <img
              alt="Subtract4225"
              src="/external/subtract4225-hv5q.svg"
              className="user-login-signup-subtract1"
            />
            <img
              alt="Subtract4225"
              src="/external/subtract4225-4yr6.svg"
              className="user-login-signup-subtract2"
            />
          </div>
        </div>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <span className="user-login-signup-text19" style={{ cursor: 'pointer' }}>
            Sign Up
          </span>
        </Link>
        <img
          alt="logo24376"
          src="/external/logo24376-w5h-200h.png"
          className="user-login-signup-logo2"
        />
      </div>
    </div>
  )
}

export default UserLoginSignup
