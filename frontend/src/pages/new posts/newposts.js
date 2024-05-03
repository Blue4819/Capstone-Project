import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';

const activities = ['Trekking', 'Rafting', 'Rock Climbing', 'Paragliding', 'Bungee Jumping', 'Skydiving', 
'Historical Sites', 'Museums', 'Local Cuisine', 'Festivals', 'Art Galleries', 'Swimming', 
'Sunbathing', 'Beach Volleyball', 'Surfing', 'Snorkeling', 'Jet Skiing', 'Food Exploration', 
'Wildlife Safari', 'Scuba Diving'];

const NewPosts = () => {
  const decoded = JSON.parse(localStorage.getItem('auth'));
  const userId = decoded.token.user._id;
  const userPicturePath = decoded.token.user.picturePath;

  const [caption, setCaption] = useState('');
  const [picture, setPicture] = useState(null);
  const [activity, setActivity] = useState('Select an activity');
  const [imagePreview, setImagePreview] = useState(null);
  const [location, setLocation] = useState('');

  useEffect(() => { 
    return () => URL.revokeObjectURL(imagePreview);
  }, [imagePreview]);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleImageChange = (event) => {
    setPicture(event.target.files[0]);
    const url = URL.createObjectURL(event.target.files[0]);
    setImagePreview(url);
  };

  const handleActivityChange = (e) => {
    setActivity(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePost = async () => {
      try {
        console.log({ userId, location, activity, caption, picture, userPicturePath })
        const res = await axios.post("/post/new", { userId, location, activity, caption, picture, userPicturePath });
        console.log('Post uploaded successfully:', res.data);
        // You can add further handling here, like redirecting or updating state.
      } catch (error) {
        console.error('Error uploading post:', error);
        // Handle error appropriately, such as displaying an error message.
      }
    
  };

  return (
    <div className="container">
      <div className="post-form">
        <h1>New Post</h1>
        <div className="input-wrapper">
          <textarea id="postContent" rows="5" value={caption} onChange={handleCaptionChange} placeholder="What's on your mind?"></textarea>
        </div>
        <div className="input-wrapper">
          <select id="activitydropdown" value={activity} onChange={handleActivityChange}>
            <option value="Select an activity" disabled hidden>Select an activity</option>
            {activities.map((activity, index) => (
              <option key={index} value={activity}>{activity}</option>
            ))}
          </select>
        </div>
        <div className="input-wrapper">
          <input type="file" id="postImage" accept="image/*" onChange={handleImageChange} />
          {imagePreview && (
            <img src={imagePreview} alt="Image preview" className="image-preview" />
          )}
        </div>
        <div className="input-wrapper">
          <input type="text" id="location" value={location} onChange={handleLocationChange} placeholder="Enter location" />
        </div>
        <button onClick={handlePost}>Post</button>
      </div>
    </div>
  );
};

export default NewPosts;
