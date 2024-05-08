import React, { useState, useEffect } from 'react';
import './profile.css';
import axios from 'axios';

import Sidebar from '../SideBarSection/sidebar';

const EditProfile = () => {
  const decoded = JSON.parse(localStorage.getItem('auth'));

  const [picturePath, setPicturePath] = useState(decoded.token.user.picturePath || '');
  const [name, setName] = useState(decoded.token.user.username || '');
  const [age, setAge] = useState(decoded.token.user.age || '');
  const [gender, setGender] = useState(decoded.token.user.gender || 'Prefer not to say');
  const [interests, setInterests] = useState(decoded.token.user.followed_activities || []);
  const [locations, setLocations] = useState(decoded.token.user.followed_locations || []);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const interestsList = [
    'Adventure Sports',
    'Cultural Exploration',
    'Beach Activities',
    'Wildlife Safari',
    'Scuba Diving',
    'Photography',
    'Food Exploration',
    'Cycling',
    'Yoga',
    'Skiing',
    'Surfing',
    'Rafting',
    'Rock Climbing',
    'Paragliding',
    'Bungee Jumping',
    'Skydiving',
    'Horseback Riding',
    'Kayaking',
    'Fishing',
  ];

  const handleInterestClick = (e) => {
    e.preventDefault();
    const interest = e.target.textContent;
    const isExistingInterest = interests.includes(interest);

    if (isExistingInterest) {
      setInterests(interests.filter(item => item !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleAddLocation = (e) => {
    const location = e.target.previousElementSibling.value.trim();
    if (location) {
      setLocations([...locations, location]);
      e.target.previousElementSibling.value = '';
    }
  };

  const handleLocationRemove = (location) => {
    setLocations(locations.filter(item => item !== location));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPicturePath(reader.result);
      };
      reader.onerror = (error) => {
        console.error('FileReader error:', error);
      };
      reader.readAsDataURL(file);
    } else {
      setPicturePath('');
    }
  };

  const handleDeleteProfile = async () => {
    try {
      const response = await axios.delete('/user/delete', {
        data: {
          token: localStorage.getItem('auth'),
        },
      });
      if (response.status === 200) {
        localStorage.removeItem('auth');
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      id: decoded.token.user._id,
      picturePath: picturePath,
      username: name,
      age: age,
      gender: gender,
      activities: interests,
      locations: locations,
    };
    const response = await axios.post('/user/saveinfo', formData);
    if (response.status === 200) {
      const token = response.data;
      localStorage.setItem('auth', JSON.stringify({ token, isGoogle: true }));
      setModalMessage('Details saved successfully!');
      setModalVisible(true);
      window.location.href = '/editprofile';
    }
  };

  return (
    <div className="container">
      <Sidebar className='sides'/>
      <div className="profile-pic-container">
        <img id="profilePicPreview" className="profile-pic" src={picturePath.data || '#'} alt="Profile Picture Preview" />
        <label htmlFor="profilePic" className="upload-btn">Upload Profile Picture</label>
        <input type="file" id="profilePic" name="picturePath" accept="image/*" onChange={handleProfilePicChange} />
      </div>
      <form id="profileForm" onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer Not To Say">Prefer Not To Say</option>
        </select>
        <div className="interests">
          <label>Interests:</label>
          {interestsList.map((interest, index) => (
            <button
              key={index}
              className={`interestBtn ${interests.includes(interest) ? 'highlighted' : ''}`}
              onClick={handleInterestClick}
            >
              {interest}
            </button>
          ))}
        </div>
        <div className="interests">
          <label>Chosen Interests:</label>
          {interests.map((interest, index) => (
            <button
              key={index}
              className="interestBtn highlighted"
              onClick={handleInterestClick}
            >
              {interest}
            </button>
          ))}
        </div>
        <div className="locations">
          <label htmlFor="locationInput">Visited Places:</label>
          <div id="locationsContainer">
            <input type="text" id="locationInput" placeholder="Enter a location" />
            <button type="button" id="addLocationBtn" className="upload-btn" onClick={handleAddLocation}>Add Location</button>
          </div>
          <div id="locationsList">
            {locations.map((location, index) => (
              <button
                key={index}
                className="locationBtn"
                onClick={() => handleLocationRemove(location)}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
        <div className="button-container">
          <button type="submit" className="button upload-btn">Submit</button>
          <button type="button" className="button delete-btn" onClick={handleDeleteProfile}>Delete Account</button>
        </div>
      </form>
      {/* Modal */}
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalVisible(false)}>&times;</span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
