import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleErrorBlur = (event) => {
        setError(event.target.value);
    }
    const handleCreateUser = (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            setError("Your two password didn't match");
            return;
        }
    }
    return (
        <div className="form-container">
      <div>
        <h2 className="from-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onClick={handleEmailBlur} type="email" name="" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onClick={handlePasswordBlur} type="password" name="password" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input onClick={handleConfirmPasswordBlur} type="password" name="password" id="" required/>
          </div>
          <p style={{color: "red"}}>{error}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>Already have an acount?<Link className="form-link" to="/login">Login</Link></p>
      </div>
    </div>
    );
};

export default SignUp;