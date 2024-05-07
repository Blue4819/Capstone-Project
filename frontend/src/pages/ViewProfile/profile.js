import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './viewprofile.css'; // Import CSS file

const Profile = () => {
  const decoded = JSON.parse(localStorage.getItem('auth'));
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/post/${decoded.token.user._id}`);
        if (response.data.length > 0) {
          setPosts(response.data);
        } else {
          setPosts([]); // Set posts to an empty array if no posts are returned
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
    fetchPosts();
  }, [decoded]);
  

  if (!decoded || !decoded.token || !decoded.token.user) {
    // Handle case where decoded data is null or undefined
    return <div>Loading...</div>;
  }

  const { picturePath, username, age, gender, followed_activities, followed_locations } = decoded.token.user;
  let base64String = '';
  if (picturePath && picturePath.data) {
    const placeholder = picturePath.data;
    base64String = placeholder.replace("Binary.createFromBase64('", "").replace("')", "");
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
          <span>{username}</span>
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
          {followed_activities && followed_activities.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>

      <hr className="separator" />

      <div className="locations">
        <label>Visited Places:</label>
        <ul>
          {followed_locations && followed_locations.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
      </div>

      <hr className="separator" />

      <div className="posts-container">
        {posts.map((postItem, index) => (
          <div className="post" key={index}>
            <div className="post-details">
              <p className="post-description">{postItem.caption}</p>
              <img className="post-image" src={`data:${postItem.picture.contentType};base64,${postItem.picture.data}`} alt="Post Image" />
              <p className="post-location">{postItem.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
