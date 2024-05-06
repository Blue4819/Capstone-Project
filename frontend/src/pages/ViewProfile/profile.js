import React from 'react';
import './viewprofile.css'; // Import CSS file
import Sidebar from '../SideBarSection/sidebar';


class Profile extends React.Component {
  render() {
    return (
      
      <div className="container">
        <Sidebar/>
        <h1 id="userName">Profile Page</h1>
        <div className="profile-pic-container">
          <img id="profilePicPreview" className="profile-pic" src="#" alt="Profile Picture Preview" />
        </div>
        <div className="user-details">
          <div className="detail">
            <label htmlFor="name">Name:</label>
            <span id="name"></span>
          </div>
          <div className="detail">
            <label htmlFor="age">Age:</label>
            <span id="age"></span>
          </div>
          <div className="detail">
            <label htmlFor="gender">Gender:</label>
            <span id="gender"></span>
          </div>
        </div>
        <hr className="separator" />
        <div className="interests">
          <label>Interests:</label>
          <ul id="interestsList"></ul>
        </div>
        <hr className="separator" />
        <div className="locations">
          <label htmlFor="locationInput">Visited Places:</label>
          <ul id="locationsList"></ul>
        </div>
      </div>
    );
  }
}

export default Profile;
