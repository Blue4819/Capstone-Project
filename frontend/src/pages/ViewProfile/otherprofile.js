import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import './viewprofile.css'; // Import CSS file

export const OtherProfile = () => {
  const [user, setUser] = useState(null);
  const [base64String, setBase64String] = useState('');
  const { id: paramsId } = useParams();
  const location = useLocation();
  const locationId = location.state?.data;
  const ID = paramsId || locationId;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/user/${ID}`);
        const userData = response.data;
        setUser(userData);
        if (userData.picturePath && userData.picturePath.data) {
          const placeholder = userData.picturePath.data;
          const base64 = placeholder.replace("Binary.createFromBase64('", "").replace("')", "");
          setBase64String(base64);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (ID) {
      fetchUser();
    }
  }, [ID]);

  return (
    <div className="container">
      <h1>User Profile</h1>

      <div className="profile-pic-container">
        <img className="profile-pic" src={base64String} alt="Profile Picture" />
      </div>

      <div className="user-details">
        <div className="detail">
          <label>Name:</label>
          <span>{user && user.username}</span>
        </div>
        <div className="detail">
          <label>Age:</label>
          <span>{user && user.age}</span>
        </div>
        <div className="detail">
          <label>Gender:</label>
          <span>{user && user.gender}</span>
        </div>
      </div>

      <hr className="separator" />

      <div className="interests">
        <label>Interests:</label>
        <ul>
          {user && user.interests && user.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>

      <hr className="separator" />

      <div className="locations">
        <label>Visited Places:</label>
        <ul>
          {user && user.locations && user.locations.map((location, index) => (
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

export default OtherProfile;
