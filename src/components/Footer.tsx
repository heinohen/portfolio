// src/Footer.tsx

import React from 'react';
import '../Footer.css'; // Import Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 My App. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/heinohen" target="_blank" rel="noopener noreferrer">GitHub</a> {/* GitHub link */}
        </div>
Photo by <a href="https://unsplash.com/@kenrickmills?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kenrick Mills</a> on <a href="https://unsplash.com/photos/birds-flying-near-clouds-MF9Wy1NA55I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

      </div>
    </footer>
  );
};

export default Footer;
