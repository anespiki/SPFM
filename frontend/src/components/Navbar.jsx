import React from 'react';
import { Link } from 'react-router-dom'; // To handle routing
import '../styles/navbar-page.css'; // Import navbar-page.css

function Navbar() {
  return (
    <nav className="navbar"> {/* Use Tailwind classes or custom styles */}
      <div className="navbar-container">
        {/* Left side: Title */}
        <h1 className="navbar-title">Smart Personal Finance Manager</h1>

        {/* Right side: Navigation Links */}
        <div className="navbar-links">
          <Link to="/home" className="navbar-link">
            Home
          </Link>
          <Link to="/profile" className="navbar-link">
            Profile
          </Link>
          <Link to="/about" className="navbar-link">
            About Us
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
