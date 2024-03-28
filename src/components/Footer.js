// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <Link to="/documentation">Documentation</Link>
      <a href="https://github.com/prof-gautam" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
