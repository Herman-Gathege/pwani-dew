// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} Pwani Dew. All rights reserved.</p>
      <p>
        <a href="/privacy-policy" className="text-white">Privacy Policy</a> | 
        <a href="/terms-of-service" className="text-white"> Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
