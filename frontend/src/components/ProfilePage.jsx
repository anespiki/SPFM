import React from 'react';
import '../styles/profile-page.css'; // Import the custom CSS for styling
import image2 from '../images/image2.png';
import { useNavigate } from 'react-router-dom';



const ProfilePage = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    navigate('/');
  };
  return (
    <div className="profile-container">
      <div className="profile-content">
        {/* Profile Picture */}
        <div className="profile-picture">
          <img
            src={image2}
            alt="Profile"
            className="rounded-full border-4 border-red-500"
          />
        </div>

        {/* Profile Information */}
        <div className="profile-info">
          <h1 className="profile-title">John Doe</h1>
          <p className="profile-email">Email: johndoe@example.com</p>
          <p className="profile-bio">johndoe</p>
        </div>

        {/* Buttons Section */}
        <div className="profile-buttons">
          <button className="profile-button">Help</button>
          <button className="profile-button">Account</button>
          <button className="profile-button">Inbox</button>
          <button className="profile-button">Security & Privacy</button>
          <button className="profile-button" onClick={handleLogout}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
