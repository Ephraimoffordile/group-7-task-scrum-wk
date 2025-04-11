import React from 'react';
import './HeaderMobile.css';

function HeaderMobile() {
  return (
    <header className="header-mobile">
      <div className="logo-container">
        <img src="/clicilink logo.png" alt="CivicLink Logo" className="logo-mobile" />
      </div>
      <div className="nav-icon">
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMobile;