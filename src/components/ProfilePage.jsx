import React from 'react';
import '../styles/profile-page.css'; // Import the custom CSS for styling
import image2 from '../images/image2.png';

const ProfilePage = () => {
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
          <p className="profile-bio">
            I am a passionate software developer who loves building intuitive and scalable applications. I am always eager to learn new technologies and improve my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
