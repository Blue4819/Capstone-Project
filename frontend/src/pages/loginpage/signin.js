import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = (props) => {
  const email = props.email;
  const password = props.password;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('/user/login', {email, password});
  
      if (response.data.error) {
        // If the response contains an error, log the error message
        console.error('User sign-in error:', response.data.error);
      } else {
        // If the response does not contain an error, extract the token and isGoogle property
        const {token, isGoogle} = response.data;
  
        localStorage.setItem("auth", JSON.stringify({token, isGoogle}))
        console.log('User sign-in successful:', response);
        navigate('/dashboard');
      }
    } catch(error) {
      console.error('User sign-in error:', error);
    }
  };

  return (
        <button onClick={handleSubmit} type='submit' className=' active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-[#E85A50] rounded-xl text-white font-bold text-lg'>
          Sign in
        </button>
  );
};

export default SignIn;