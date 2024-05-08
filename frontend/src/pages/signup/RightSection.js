import React, { useState } from 'react';
import CreateAccount from './createaccount.js';

const RightSection = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'firstName') {
      setFirstName(e.target.value);
    } else if (e.target.name === 'lastName') {
      setLastName(e.target.value);
    } else if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'dob') {
      setDob(e.target.value);
    } else if (e.target.name === 'location') {
      setLocation(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'confirmPassword') {
      setConfirmPassword(e.target.value);
    }
  };

  return (
    <div className="right-section">
      <h1 className='text-6xl font-bold'>Join Holidate!</h1>
      <p className='text-2xl font-medium mt-4'>Create an account and get started with your journey!</p>

      <div className="input-group mt-6 grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstName" className='text-lg text-semibold'>First Name</label>
          <input type="text" name="firstName" value={firstName} onChange={handleChange} className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className='text-lg'>Last Name</label>
          <input type="text" name="lastName" value={lastName} onChange={handleChange} className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="loginId" className='text-lg'>Username</label>
          <input type="email" name="username" value={username} onChange={handleChange} className= 'w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]'/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className='text-lg'>Email</label>
          <input type="email" name="email" value={email} onChange={handleChange} className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dob" className='text-lg'>Date of Birth</label>
          <input type="date" name="dob" value={dob} onChange={handleChange} className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="location" className='text-lg'>Location</label>
          <input type="text" name="location" value={location} onChange={handleChange} className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className='text-lg'>Password</label>
          <input type="password" name="password" value={password} onChange={handleChange} className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className='text-lg'>Confirm Password</label>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} className='w-full border-2 border-transparent rounded-xl p-2 bg-[#EAE8DC]' />
        </div>
      </div>
      <CreateAccount firstName={firstName} lastName={lastName} username={username} dob={dob} location={location} email={email} password={password} confirmPassword={confirmPassword} />
    </div>
  );
};

export default RightSection;