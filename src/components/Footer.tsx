import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      {/* ... other footer content ... */}
      <div className="social-links">
        <span>
          <a href="https://facebook.com" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </span>
        <br />
        <span>
          <a href="https://twitter.com" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </span>
        <br />
        <span>
          <a href="https://youtube.com" className="social-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </span>
      </div>
      {/* ... other footer content ... */}
    </div>
  );
};

export default Footer;