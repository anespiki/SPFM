import React from 'react';
import '../styles/contact-page.css'; // Import the custom CSS file

const ContactPage = () => {
  return (
    <div className="main-content">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-text">
          If you have any questions or need support, feel free to reach out to us.
          We are here to help you with your personal finance journey.
        </p>
        <p className="contact-info">
          Email: support@smartfinance.com <br />
          Phone: +1 (800) 123-4567
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
