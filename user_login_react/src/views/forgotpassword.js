import React from 'react'

import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import './forgotpassword.css'

const Forgotpassword = (props) => {
  return (
    <div className="forgotpassword-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="forgotpassword-forgotpassword">
        <div className="forgotpassword-user-forgot-password"></div>
        <div className="forgotpassword-admin-forgot-password-form">
          <img
            src="/external/pleaseenteryourusername4225-o34.svg"
            alt="Pleaseenteryourusername4225"
            className="forgotpassword-pleaseenteryourusername"
          />
          <img
            src="/external/forgotpassword4225-jv9b.svg"
            alt="ForgotPassword4225"
            className="forgotpassword-forgot-password"
          />
          <div className="forgotpassword-frame2">
            <div className="forgotpassword-username">
              <img
                src="/external/vector4225-3f8.svg"
                alt="Vector4225"
                className="forgotpassword-vector1"
              />
              <img
                src="/external/vector4225-2eka.svg"
                alt="Vector4225"
                className="forgotpassword-vector2"
              />
              <img
                src="/external/vector4225-k9zg.svg"
                alt="Vector4225"
                className="forgotpassword-vector3"
              />
              <img
                src="/external/vector4225-1dph.svg"
                alt="Vector4225"
                className="forgotpassword-vector4"
              />
              <img
                src="/external/vector4225-r4hl.svg"
                alt="Vector4225"
                className="forgotpassword-vector5"
              />
              <img
                src="/external/vector4225-31i.svg"
                alt="Vector4225"
                className="forgotpassword-vector6"
              />
              <img
                src="/external/vector4225-8jew.svg"
                alt="Vector4225"
                className="forgotpassword-vector7"
              />
              <img
                src="/external/vector4225-1km.svg"
                alt="Vector4225"
                className="forgotpassword-vector8"
              />
            </div>
          </div>
          <div className="forgotpassword-btn-reset-password">
          <Link to="/check-mail" style={{ textDecoration: 'none' }}>
  <span className="forgotpassword-text1" style={{ cursor: 'pointer' }}>
    RESET PASSWORD
  </span>
</Link>
          </div>
          <div className="forgotpassword-btn-back-right">
            <span className="forgotpassword-text2">BACK</span>
          </div>
          <img
            src="/external/image444225-2930i-200h.png"
            alt="Image444225"
            className="forgotpassword-image44"
          />
          <div className="forgotpassword-group133551">
            <img
              src="/external/subtract4225-vrpl.svg"
              alt="Subtract4225"
              className="forgotpassword-subtract1"
            />
            <img
              src="/external/subtract4225-guxt.svg"
              alt="Subtract4225"
              className="forgotpassword-subtract2"
            />
          </div>
          <div className="forgotpassword-group133563">
            <div className="forgotpassword-frame2431">
              <span className="forgotpassword-text3">Brain Station 23</span>
              <span className="forgotpassword-text4">Library</span>
              <span className="forgotpassword-text5">
                Your Premier Digital Library for Exploring Technical, Training,
                and IT Books
              </span>
            </div>
          </div>
          <div className="forgotpassword-group133564">
            <div className="forgotpassword-frame2432">
              <span className="forgotpassword-text6">Brain Station 23</span>
              <span className="forgotpassword-text7">Library</span>
              <span className="forgotpassword-text8">
                Your Premier Digital Library for Exploring Technical, Training,
                and IT Books
              </span>
            </div>
          </div>
          <img
            src="/external/logo14376-xvkg-300h.png"
            alt="logo14376"
            className="forgotpassword-logo1"
          />
          <img
            src="/external/logo24376-cvbk-200h.png"
            alt="logo24376"
            className="forgotpassword-logo2"
          />
        </div>
      </div>
    </div>
  )
}

export default Forgotpassword
