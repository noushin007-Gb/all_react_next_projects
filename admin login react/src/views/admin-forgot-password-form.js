import React from 'react';
import logo from '../assets/logo.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './admin-forgot-password-form.css';

const AdminForgotPasswordForm = () => {
  return (
    <div className="admin-forgot-password-form-container">
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>

      <div className="admin-forgot-password-form-admin-forgot-password-form">
        {/* Vector Graphics Background */}
        <div className="admin-forgot-password-form-pleaseenteryourusername">
          {Array.from({ length: 23 }, (_, i) => (
            <img
              key={i}
              src={`/external/vector2029-${['pm2', 'di95', 'f8n2l', 'gvb', '9lj', 'zbx', 'o9kf', 'rcu', 'jcy', 'b4zvi', 'lnt', '336q', 'nqrk', 'kici', 'pkhc', 'id1i', 'ax7k', 'z2xh', 'gs4p', 'o4t5', 'byrg', 'yn4o', '9xq'][i]}.svg`}
              alt={`Vector2029-${i}`}
              className={`admin-forgot-password-form-vector${10 + i}`}
            />
          ))}
        </div>

        {/* "Forgot Password" Design Section */}
        <div className="admin-forgot-password-form-forgot-password">
          {Array.from({ length: 14 }, (_, i) => (
            <img
              key={i}
              src={`/external/vector2029-${['30zr', 'groe', 'arvl', '52ob', 'j18q', 'ibp9', 'zq9g', 'y9bp', 'uyv', 'tz12', '5v3n', 'vin', 'jfc', 'viyi'][i]}.svg`}
              alt={`Vector2029-FP-${i}`}
              className={`admin-forgot-password-form-vector${33 + i}`}
            />
          ))}
        </div>

        {/* Username Field Background Vectors */}
        <div className="admin-forgot-password-form-frame2">
          <div className="admin-forgot-password-form-username">
            {Array.from({ length: 8 }, (_, i) => (
              <img
                key={i}
                src={`/external/vector2029-${['99pm', '971v', 'ny2', '50xo', 'pr4p', 'yrem', '263sd', 's3k'][i]}.svg`}
                alt={`Vector2029-User-${i}`}
                className={`admin-forgot-password-form-vector${47 + i}`}
              />
            ))}
          </div>
        </div>

        {/* Reset Password Button */}
        <div className="admin-forgot-password-form-btn-reset-password">
          <Link to="/check-mail-box" style={{ textDecoration: 'none' }}>
            <span className="admin-forgot-password-form-text1" style={{ cursor: 'pointer' }}>
              RESET PASSWORD
            </span>
          </Link>
        </div>

        {/* Back Button */}
        <div className="admin-forgot-password-form-btn-back-right">
          <Link to="/admin-login-form" className="admin-forgot-password-form-text2">
            BACK
          </Link>
        </div>

        {/* Logo & Description */}
        <div className="admin-forgot-password-form-frame229">
          <img
            src={logo}
            alt="Brain Station 23 Logo"
            className="admin-login-form-downloadremovebgpreview1"
          />
          <span className="admin-forgot-password-form-text3">Brain Station 23</span>
          <span className="admin-forgot-password-form-text4">Library</span>
          <span className="admin-forgot-password-form-text5">
            Your Premier Digital Library for Exploring Technical, Training, and IT Books
          </span>
        </div>

        {/* Image Decoration */}
        <img
          src="/external/image442093-lakb-200h.png"
          alt="Decoration"
          className="admin-forgot-password-form-image44"
        />

        {/* Group Background Elements */}
        <div className="admin-forgot-password-form-group133551">
          <img
            src="/external/subtract2093-haqh.svg"
            alt="Subtract1"
            className="admin-forgot-password-form-subtract1"
          />
          <img
            src="/external/subtract2093-d2gg.svg"
            alt="Subtract2"
            className="admin-forgot-password-form-subtract2"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPasswordForm;
