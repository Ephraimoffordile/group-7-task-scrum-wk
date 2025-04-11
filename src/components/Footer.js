import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="/Clicilink logo.png" alt="CivicLink Logo" className="logo" />
          <p className="description">Helping citizens connect with their government representatives and services.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/representatives">Find Your Representatives</a></li>
            <li><a href="/offices">Government Offices</a></li>
            <li><a href="/report">Report Issues</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <span>
              <a href="https://facebook.com" className="social-icon"><FaFacebook /></a>
            </span><br />
            <span>
              <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
            </span><br />
            <span>
              <a href="https://youtube.com" className="social-icon"><FaYoutube /></a>
            </span>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2025{new Date().getFullYear()} CivicLink. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;