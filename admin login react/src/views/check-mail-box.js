import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import logo from '../assets/logo.png';

import './check-mail-box.css'

const CheckMailBox = (props) => {
  return (
    <div className="check-mail-box-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="check-mail-box-check-mail-box">
        <div className="check-mail-box-group4">
          <div className="check-mail-box-admin-otp-form">
            <div className="check-mail-box-admin-forgot-password-form">
              <div className="check-mail-box-pleaseenteryourusername"></div>
              <div className="check-mail-box-forgot-password"></div>
              <div className="check-mail-box-btn-back-right">
                <span className="check-mail-box-text1">BACK</span>
              </div>
              <div className="check-mail-box-frame229">
              <img
  src={logo}
  alt="Brain Station 23 Logo"
  className="admin-login-form-downloadremovebgpreview1"
/>
                <span className="check-mail-box-text2">Brain Station 23</span>
                <span className="check-mail-box-text3">Library</span>
                <span className="check-mail-box-text4">
                  Your Premier Digital Library for Exploring Technical,
                  Training, and IT Books
                </span>
              </div>
              <div className="check-mail-box-group133551">
                <img
                  src="/external/subtracti2029-bxp.svg"
                  alt="SubtractI2029"
                  className="check-mail-box-subtract1"
                />
                <img
                  src="/external/subtracti2029-kyd.svg"
                  alt="SubtractI2029"
                  className="check-mail-box-subtract2"
                />
              </div>
            </div>
          </div>
          <img
            src="/external/image12093-suhl-300h.png"
            alt="Image12093"
            className="check-mail-box-image1"
          />
        </div>
        <span className="check-mail-box-text5">
          Please enter the OTP to proceed
        </span>
        <span className="check-mail-box-text6">Check your Mailbox</span>
        <div className="check-mail-box-frame">
          <span className="check-mail-box-text7">OTP</span>
        </div>
        <div className="check-mail-box-btn-verify">
        <Link to="reset-password" style={{ textDecoration: 'none' }}>
        <span className="check-mail-box-text8" style={{ cursor: 'pointer' }}>
          VERIFY
        </span>
      </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckMailBox
