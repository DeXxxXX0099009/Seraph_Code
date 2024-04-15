import React from 'react';
import './SeraphLogin.css'; // Ensure your CSS file is named SeraphLogin.css
import Car from '../Assets/Car.png'; // Ensure the path to your car image is correct
import googleLogo from '../Assets/faGoogle.png'; 
import { useNavigate } from 'react-router-dom';

const SeraphLogin = () => {
    return (
      <div className="login-container">
        <div className="car-section">
          <h1 className="welcome-text">Welcome to Seraph</h1>
          <img src={Car} alt="Seraph Logo" className="car-logo" />
        </div>
        <div className="form-section">
          <h3 className="sign-in-title">Sign In</h3>
          <div className="form-container">
          <form>
            <div className="input-group">
              <label htmlFor="email">Enter your email/phone number here...</label>
              <input type="text" id="email" placeholder=" " />
            </div>
            <div className="input-group">
              <label htmlFor="password">Enter your password here...</label>
              <input type="password" id="password" placeholder=" " />
            </div>
              <button type="submit" className="sign-in-button">Sign In Now</button>
              <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
              <div className="divider">
                <span>OR</span>
              </div>
              <button className="google-sign-in-button">
                <img src={googleLogo} alt="Google" />
                Continue with Google
              </button>
              <div className="create-account">
                <p>Don't have an account? <a href="/create-account" className="create-account-link">Create Account</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default SeraphLogin;