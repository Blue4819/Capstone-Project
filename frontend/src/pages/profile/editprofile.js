import React, { useRef, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import './profile.css';
import './script.js';
import {jwtDecode} from "jwt-decode";

const EditProfile = () => {
  const decoded = JSON.parse(localStorage.getItem('auth'));
  console.log(decoded)
  console.log(decoded.token.user)

  const [profilePic, setProfilePic] = useState(decoded.token.user.profilePic || null);
  const [name, setName] = useState(decoded.token.user.username || '');
  const [age, setAge] = useState(decoded.token.user.age || '');
  const [gender, setGender] = useState(decoded.token.user.gender || '');
  const [interests, setInterests] = useState(decoded.token.user.interests || []);
  const [locations, setLocations] = useState(decoded.token.user.locations || []);

  const handleInterestClick = (e) => {
    const interest = e.target.textContent;
    if (interests.includes(interest)) {
      setInterests(interests.filter(item => item !== interest));
    } else {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container">
      <form id="profileForm" onSubmit={handleFormSubmit}>
        <h1>Profile Page</h1>
        <div className="profile-pic-container">
          <img id="profilePicPreview" className="profile-pic" src={profilePic || '#'} alt="Profile Picture Preview" />
          <label htmlFor="profilePic" className="upload-btn">Upload Profile Picture</label>
          <input type="file" id="profilePic" name="profilePic" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} />
        </div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div className="interests">
          <label>Interests:</label>
          <button className="interestBtn" id="ad</div>ventureSportsBtn" onClick={handleInterestClick}>Adventure Sports</button>
          <button className="interestBtn" id="culturalExplorationBtn" onClick={handleInterestClick}>Cultural Exploration</button>
          <button className="interestBtn" id="beachActivitiesBtn" onClick={handleInterestClick}>Beach Activities</button>
          <button className="interestBtn" id="mountainClimbingBtn" onClick={handleInterestClick}>Mountain Climbing</button>
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
        <button type="submit" className="upload-btn">Submit</button>
      </form>
    </div>
  );
};

export default EditProfile;