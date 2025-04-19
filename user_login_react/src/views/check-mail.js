import React from 'react'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './check-mail.css'

const CheckMail = (props) => {
  return (
    <div className="check-mail-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="check-mail-check-mail">
        <div className="check-mail-component2">
          <div className="check-mail-group4">
            <div className="check-mail-admin-otp-form">
              <div className="check-mail-admin-forgot-password-form">
                <div className="check-mail-pleaseenteryourusername"></div>
                <div className="check-mail-forgot-password"></div>
                <div className="check-mail-btn-back-right">
                  <span className="check-mail-text1">BACK</span>
                </div>
                <div className="check-mail-group133551">
                  <img
                    src="/external/subtract4225-nb3.svg"
                    alt="Subtract4225"
                    className="check-mail-subtract1"
                  />
                  <img
                    src="/external/subtract4225-vatq.svg"
                    alt="Subtract4225"
                    className="check-mail-subtract2"
                  />
                </div>
                <img
                  src="/external/logo24376-479-200h.png"
                  alt="logo24376"
                  className="check-mail-logo2"
                />
              </div>
            </div>
            <img
              src="/external/image14225-dpx-400h.png"
              alt="Image14225"
              className="check-mail-image1"
            />
          </div>
          <span className="check-mail-text2">
            Please enter the OTP to proceed
          </span>
          <span className="check-mail-text3">Check your Mailbox</span>
          <div className="check-mail-frame">
            <span className="check-mail-text4">OTP</span>
          </div>
          <div className="check-mail-btn-verify">
          <Link to="/reset-password" style={{ textDecoration: 'none' }}>
  <span className="check-mail-text5" style={{ cursor: 'pointer' }}>
    VERIFY
  </span>
</Link>
          </div>
          <div className="check-mail-group133563">
            <div className="check-mail-frame243">
              <span className="check-mail-text6">Brain Station 23</span>
              <span className="check-mail-text7">Library</span>
              <span className="check-mail-text8">
                Your Premier Digital Library for Exploring Technical, Training,
                and IT Books
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckMail
