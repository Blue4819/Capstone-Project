import React from 'react';
import './HolidateLogin.css';
const HolidateLogin = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Welcome!</h1>
                <p>Enter your email and password to access your account</p>
    
                <div className='input-box'>
                <p>Email/Username</p>
                    <input type="Email"/>
                </div>

                <div className='input-box'>
                <p>Password</p>
                    <input type="Password"required />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox"/> Remember me </label>
                    <a href='#'> Forgot Password</a>
                </div>

                <button type="submit">Sign In</button>

                <div className="register-link">
                <p>Don't have an account? <a href='#'>Sign Up</a></p>
                </div>

               
            </form>
        </div>

        
    );
};



export default HolidateLogin;