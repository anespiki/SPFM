import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar'; // Import Navbar
import ProfilePage from './components/ProfilePage';

function App() {
  const location = useLocation(); // Get the current location

  return (
    <div>
      {/* Conditionally render Navbar: Only on pages other than LoginPage */}
      {location.pathname !== '/' && <Navbar />}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />

      </Routes>
    </div>
  );
}

export default App;
