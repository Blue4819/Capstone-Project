import React, { useState } from 'react';
import SignIn from './signin.js';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export default function Form({
    setUser,
    setAuthState,
    onSubmit
}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
    };

    const handleGoogleLoginSuccess = (response) => {
        console.log(response);
        setEmail(response.profile.email);
        axios.post("/api/user/google/callback", { email }).then((response) => {
            // Handle the response from the server
          });
    };

    const handleGoogleLoginError = () => {
        console.log('Login Failed');
    };

    return (
        <form className='bg-[#C7D6A1] mt-16 px-10 py-20 rounded-3xl border-2 border-gray 200'>
            <h1 className='text-5xl font-semibold'><center><bold>Welcome!</bold></center></h1>
            <p className='font-medium text-lg text-black-500 mt-4'>Enter your email and password to access your account</p>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-3 mt-2 bg-white'
                        placeholder=''
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className='text-lg font-medium'>Password</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-3 mt-2 bg-white'
                        placeholder=''
                        name='password'
                        type='password'
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div className='mt-8 flex justify-between itens-center'>
                    <div>
                        <input
                            type='checkbox'
                            id='remember'
                        />
                        <label className='ml-2 font-medium text-base'>Remember me</label>
                    </div>
                    <button className='font-medium text-base text-[#250101] rounded-md hover:underline'> Forgot Password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <SignIn email={email} password={password} />
                    <GoogleLogin
                        buttonText="Sign in with Google"
                        onSuccess={handleGoogleLoginSuccess}
                        onFailure={handleGoogleLoginError}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <p className='mt-6 text-base'>
                    Don't have an account?
                    <a href ="/signup" className='font-medium text-[#250101] hover:underline'> Sign up</a>
                </p>
            </div>
        </form>
    );
};