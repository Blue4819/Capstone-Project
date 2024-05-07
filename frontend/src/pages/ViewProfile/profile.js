import React from 'react';
import './viewprofile.css'; // Import CSS file
import Sidebar from '../SideBarSection/sidebar';


export const Profile = () => {
  const decoded = JSON.parse(localStorage.getItem('auth'));

  const picturePath = decoded.token.user.picturePath;
  const name = decoded.token.user.username;
  const age = decoded.token.user.age;
  const gender = decoded.token.user.gender;
  const interests = decoded.token.user.interests || [];
  const locations = decoded.token.user.locations || [];

  let base64String = '';
  if (picturePath && picturePath.data) {
    const placeholder = picturePath.data;
    base64String = placeholder.replace("Binary.createFromBase64('", "").replace("')", "");
  }

  return (
    <div className="container">
      <h1 id="userName">Profile Page</h1>
      <div className="profile-pic-container">
        <img id="profilePicPreview" className="profile-pic" src={base64String ? `data:${picturePath.type};base64,${base64String}` : '/path/to/default-profile-picture.jpg'} alt="Profile Picture Preview" />
      </div>
      <div className="user-details">
        <div className="detail">
          <label htmlFor="name">Name:</label>
          <span id="name">{name}</span>
        </div>
        <div className="detail">
          <label htmlFor="age">Age:</label>
          <span id="age">{age}</span>
        </div>
        <div className="detail">
          <label htmlFor="gender">Gender:</label>
          <span id="gender">{gender}</span>
        </div>
      </div>
      <hr className="separator" />
      <div className="interests">
        <label>Interests:</label>
        <ul id="interestsList">
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <hr className="separator" />
      <div className="locations">
        <label htmlFor="locationInput">Visited Places:</label>
        <ul id="locationsList">
          {locations.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;