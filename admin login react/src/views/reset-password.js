import React from 'react'

import { Helmet } from 'react-helmet'

import './reset-password.css'
import logo from '../assets/logo.png';

const ResetPassword = (props) => {
  return (
    <div className="reset-password-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="reset-password-reset-password">
        <div className="reset-password-group5">
          <div className="reset-password-admin-otp-form">
            <div className="reset-password-admin-forgot-password-form">
              <div className="reset-password-pleaseenteryourusername"></div>
              <div className="reset-password-forgot-password"></div>
              <div className="reset-password-btn-back-right">
                <span className="reset-password-text1">BACK</span>
              </div>
              <div className="reset-password-frame229">
              <img
  src={logo}
  alt="Brain Station 23 Logo"
  className="admin-login-form-downloadremovebgpreview1"
/>
                <span className="reset-password-text2">Brain Station 23</span>
                <span className="reset-password-text3">Library</span>
                <span className="reset-password-text4">
                  Your Premier Digital Library for Exploring Technical,
                  Training, and IT Books
                </span>
              </div>
              <div className="reset-password-group133551">
                <img
                  src="/external/subtracti2029-23pm.svg"
                  alt="SubtractI2029"
                  className="reset-password-subtract1"
                />
                <img
                  src="/external/subtracti2029-gde9.svg"
                  alt="SubtractI2029"
                  className="reset-password-subtract2"
                />
              </div>
            </div>
          </div>
          <img
            src="/external/image352093-s1fs-200h.png"
            alt="Image352093"
            className="reset-password-image35"
          />
        </div>
        <div className="reset-password-group3">
          <span className="reset-password-text5">
            Please enter your new password
          </span>
          <span className="reset-password-text6">Reset Password</span>
          <div className="reset-password-frame2">
            <span className="reset-password-text7">New Password</span>
          </div>
          <div className="reset-password-frame230">
            <span className="reset-password-text8">Confirm Password</span>
          </div>
          <div className="reset-password-btn-reset-password">
            <span className="reset-password-text9">RESET PASSWORD</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
