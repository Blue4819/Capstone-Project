import React, { useState, useEffect } from 'react';
import './profile.css';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';


const EditProfile = () => {
  const decoded = JSON.parse(localStorage.getItem('auth'));

  const [picturePath, setPicturePath] = useState(decoded.token.user.picturePath || null);
  const [name, setName] = useState(decoded.token.user.username ||'');
  const [age, setAge] = useState(decoded.token.user.age || '');
  const [gender, setGender] = useState(decoded.token.user.gender || '');
  const [interests, setInterests] = useState(decoded.token.user.interests || []);
  const [locations, setLocations] = useState(decoded.token.user.locations || []);

  const handleInterestClick = (e) => {
    const interest = e.target.textContent;
    // Check if the interest already exists in the interests array
    const isExistingInterest = interests.includes(interest);
  
    if (isExistingInterest) {
      // If the interest exists, remove it from the array
      setInterests(interests.filter(item => item !== interest));
    } else {
      // If the interest doesn't exist, add it to the array
      setInterests([...interests, interest]);
    }
  };

  const handleAddLocation = (e) => {
    const location = e.target.previousElementSibling.value;
    if (location) {
      setLocations([...locations, location]);
      e.target.previousElementSibling.value = '';
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    
    // Create a FileReader instance
    const reader = new FileReader();
  
    // Listen for the FileReader load event
    reader.onload = () => {
      // Update the profile picture preview
      setPicturePath(reader.result);
    };
  
    // Read the selected file as a data URL
    reader.readAsDataURL(file);
  };
  

  const handleDeleteProfile = async () => {
    try {
      const response = await axios.delete('/user/delete', {
        data: {
          token: localStorage.getItem('auth'),
        },
      });
      if (response.status === 200) {
        // Clear the local storage and navigate to the login page
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
      gender: gender
    };
    console.log(formData)
    const response = await axios.post('/user/saveinfo', formData);
  };

  return (
    <div className="container">
      <form id="profileForm" onSubmit={handleFormSubmit}>
        <h1>Profile Page</h1>
        <div className="profile-pic-container">
          <img id="profilePicPreview" className="profile-pic" src={picturePath || '#'} alt="Profile Picture Preview" />
          <label htmlFor="profilePic" className="upload-btn">Upload Profile Picture</label>
          <input type="file" id="profilePic" name="picturePath" accept="image/*" onChange={handleProfilePicChange} />
        </div>
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
          <button className="interestBtn" id="adventureSportsBtn" onClick={handleInterestClick}>Adventure Sports</button>
          <button className="interestBtn" id="culturalExplorationBtn" onClick={handleInterestClick}>Cultural Exploration</button>
          <button className="interestBtn" id="beachActivitiesBtn" onClick={handleInterestClick}>Beach Activities</button>
          <button className="interestBtn" id="adventureSportsBtn" onClick={handleInterestClick}>Adventure Sports</button>
          <button className="interestBtn" id="wildlifeSafariBtn" onClick={handleInterestClick}>Wildlife Safari</button>
          <button className="interestBtn" id="scubaDivingBtn" onClick={handleInterestClick}>Scuba Diving</button>
          <button className="interestBtn" id="photographyBtn" onClick={handleInterestClick}>Photography</button>
          <button className="interestBtn" id="foodExplorationBtn" onClick={handleInterestClick}>Food Exploration</button>
          <button className="interestBtn" id="cyclingBtn" onClick={handleInterestClick}>Cycling</button>
          <button className="interestBtn" id="yogaBtn" onClick={handleInterestClick}>Yoga</button>
          <button className="interestBtn" id="skiingBtn" onClick={handleInterestClick}>Skiing</button>
          <button className="interestBtn" id="surfingBtn" onClick={handleInterestClick}>Surfing</button>
          <button className="interestBtn" id="raftingBtn" onClick={handleInterestClick}>Rafting</button>
          <button className="interestBtn" id="rockClimbingBtn" onClick={handleInterestClick}>Rock Climbing</button>
          <button className="interestBtn" id="paraglidingBtn" onClick={handleInterestClick}>Paragliding</button>
          <button className="interestBtn" id="bungeeJumpingBtn" onClick={handleInterestClick}>Bungee Jumping</button>
          <button className="interestBtn" id="skydivingBtn" onClick={handleInterestClick}>Skydiving</button>
          <button className="interestBtn" id="horsebackRidingBtn" onClick={handleInterestClick}>Horseback Riding</button>
          <button className="interestBtn" id="kayakingBtn" onClick={handleInterestClick}>Kayaking</button>
          <button className="interestBtn" id="fishingBtn" onClick={handleInterestClick}>Fishing</button>
        </div>
        <div className="interests">
          <label>Interests:</label>
              {interests.map((interest, index) => (
                <button
                  key={index}
                  className={`interestBtn ${interests.includes(interest) ? 'highlighted' : ''}`}
                  onClick={handleInterestClick}
                >
                {interest}
                </button>
              ))}
        </div>
        <div id="relatedOptions">
          {interests.map((interest, index) => (
            <span key={index}>{interest} </span>
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
              <span key={index}>{location} </span>
            ))}
          </div>
        </div>
        <div className="button-container">
          <button type="submit" className="button upload-btn">Submit</button>
          <button type="button" className="button delete-btn" onClick={handleDeleteProfile}>Delete Account</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
