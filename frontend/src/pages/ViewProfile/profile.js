import React from 'react';
import './viewprofile.css'; // Import CSS file

export const Profile = () => {
  const decoded = JSON.parse(localStorage.getItem('auth'));
  if (!decoded || !decoded.token || !decoded.token.user) {
    // Handle case where decoded data is null or undefined
    return <div>Loading...</div>;
  }

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
    console.log(base64String)
  } 

  return (
    <div className="container">
      <h1>User Profile</h1>

      <div className="profile-pic-container">
        <img className="profile-pic" src={base64String} alt="Profile Picture" />
      </div>

      <div className="user-details">
        <div className="detail">
          <label>Name:</label>
          <span>{name}</span>
        </div>
        <div className="detail">
          <label>Age:</label>
          <span>{age}</span>
        </div>
        <div className="detail">
          <label>Gender:</label>
          <span>{gender}</span>
        </div>
      </div>

      <hr className="separator" />

      <div className="interests">
        <label>Interests:</label>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>

      <hr className="separator" />

      <div className="locations">
        <label>Visited Places:</label>
        <ul>
          {locations.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
      </div>

      <hr className="separator" />

      <div className="posts-container">
        {/* Sample posts */}
        <div className="post">
          <div className="post-details">
            <p className="post-description">Sample post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <img className="post-image" src="index.jpg" alt="Post Image" />
            <p className="post-location">Location 1</p>
          </div>
        </div>
        <div className="post">
          <div className="post-details">
            <p className="post-description">Sample post 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <img className="post-image" src="index.jpg" alt="Post Image" />
            <p className="post-location">Location 2</p>
          </div>
        </div>
        <div className="post">
          <div className="post-details">
            <p className="post-description">Sample post 3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img className="post-image" src="index.jpg" alt="Post Image" />
            <p className="post-location">Location 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
