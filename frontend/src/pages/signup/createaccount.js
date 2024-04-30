import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateAccount = (props) => {
  const email = props.email;
  const password = props.password;
  const firstName = props.firstName;
  const lastName = props.lastName;
  const username = props.username;
  const dob = props.dob;
  const location = props.location;
  const confirmPassword = props.confirmPassword;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/user/signup', {firstName, lastName, username, email, password});

      if (response.data.error) {
        // If the response contains an error, log the error message
        console.error('User sign-in error:', response.data.error);
      } else {
        // If the response does not contain an error, extract the token and isGoogle property
        const {token, isGoogle} = response.data;
        axios.post('/user/update_location', {location})

        localStorage.setItem("auth", JSON.stringify({token, isGoogle}))
        console.log('User sign-up successful:', response);
        navigate('/dashboard');
      }
    } catch(error) {
      console.error('User sign-up error:', error);
    }
  };

  return (
    <button onClick={handleSubmit} type='submit' className='rounded-full py-4 px-20 bg-[#E85A50] text-white font-bold hover:bg-[#C7D6A1]'>
      Create Account
    </button>
  );
};

export default CreateAccount;