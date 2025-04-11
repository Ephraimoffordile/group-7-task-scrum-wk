import React from "react";
import './Hero2.css'; 

function Hero2() {
  return (
    <section className="hero2">
      <div className="hero2-content">
        <h1>Connect With Your Government Representatives</h1>
        <p>Find The Right Government Officials To Address Your Civic Issues And Concerns.</p>
        <div className="hero2-buttons">
          <button className="button-find">
            <div>
              <img src="/location-pin icon.png" alt="Location Pin Icon" className="location-icon" />
              Find Representatives
            </div>
          </button>
          <button className="button-offices">
            <div>
              <img src="/search icon.png" alt="Search Icon" className="search-icon" />
              Government Offices
            </div>
          </button>
          <button className="button-report">
            <div>
              <img src="/report icon.png" alt="Report Icon" className="report-icon" />
              Report Issues
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero2;