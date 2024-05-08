import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import './viewprofile.css'; // Import CSS file
import Sidebar from '../SideBarSection/sidebar';
 
export const OtherProfile = () => {
  const [user, setUser] = useState(null);
  const [base64String, setBase64String] = useState('');
  const [posts, setPosts] = useState([]); // Initialize posts state
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
        const decoded = JSON.parse(localStorage.getItem('auth'));
        if(userData._id==decoded.token.user._id)
            {
                window.location.href = "/profile";
            }
        if(userData._id==null)
            {
                window.location.href="/dashboard";
            }
        if (userData.picturePath && userData.picturePath.data) {
          const placeholder = userData.picturePath.data;
          const base64 = placeholder.replace("Binary.createFromBase64('", "").replace("')", "");
          setBase64String(base64);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        window.location.href="/dashboard";
      }
    };

    const fetchPosts = async () => {
      try {
        const postResponse = await axios.get(`/post/${ID}`);
        setPosts(postResponse.data); // Update posts state with response data
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    if (ID) {
      fetchUser();
      fetchPosts();
    }
  }, [ID]);

  return (
    <><div className='side'>
      <Sidebar />
    
    <div className="vprofile_container">

        <div className="profilecontainer">
          <h1>User Profile</h1>
          <div className="profile-pic-container">
            <img className="profile-pic" src={base64String} alt="Profile Picture" />
          </div>

          <div className="user-details">
            <div className="detail1">
              <label>Name:</label>
              <span>{user && user.username}</span>
            </div>
            <div className="detail2">
              <label>Age:</label>
              <span>{user && user.age}</span>
            </div>
            <div className="detail3">
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
            {posts.map((postItem, index) => (
              <div className="card mb-4" key={index}>
                <img src={`data:${postItem.picture.contentType};base64,${postItem.picture.data}`} alt="Post Image" />
                <div className="card-body">
                  <h5 className="card-title">{postItem.caption}</h5>
                  <p className="card-text"><strong>Activity:</strong> {postItem.activity}</p>
                  <p className="card-text"><strong>Location:</strong> {postItem.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div></div>
      </div></>
  );
};

export default OtherProfile;