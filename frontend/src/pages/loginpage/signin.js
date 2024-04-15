import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = ({ onChange, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/user/login', { email, password });
      console.log('User sign-in successful:', response);
      navigate('/dashboard');
    } catch (error) {
      console.error('User sign-in error:', error);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <button type='submit' className=' active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-[#E85A50] rounded-xl text-white font-bold text-lg'>
        Sign In</button>
      </form>
  );
};

export default SignIn;