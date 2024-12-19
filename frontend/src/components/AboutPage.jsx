import React from 'react';
import '../styles/about-page.css'; // Import the custom CSS file

const AboutPage = () => {
  return (
    <div className="main-content">
      <div className="about-container">
        <h1 className="about-title">About Smart Personal Finance Manager</h1>
        <p className="about-text">
          Smart Personal Finance Manager is a powerful tool designed to help you
          manage your finances with ease. It provides insightful analysis of your
          expenses, tracks your savings, and ensures you stay on top of your budget.
          With this platform, you can plan and control your financial goals efficiently,
          helping you achieve a financially secure future.
        </p>

        <h2 className="about-subtitle">Our Headquarters Location</h2>
        <p className="location-text">
          Our company headquarters is located in Sarajevo, Bosnia and Herzegovina.
          Feel free to visit us or contact us for any inquiries.
        </p>

        {/* Google Map iframe */}
        <div className="google-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4840.932889840428!2d18.311407672242638!3d43.8260586069164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758ca0bbb37da7b%3A0xa14d6099047dafb9!2sInternacionalni%20Univerzitet%20u%20Sarajevu!5e0!3m2!1sbs!2sba!4v1734543810665!5m2!1sbs!2sba"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
