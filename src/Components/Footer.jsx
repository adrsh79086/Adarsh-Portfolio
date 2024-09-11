// src/components/Footer.jsx
import React from 'react';
import '../style.css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Adarsh kumar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
