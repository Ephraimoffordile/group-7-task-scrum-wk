import React, { useState } from 'react';
import './LocationSelection.css';

function LocationSelection() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedLga, setSelectedLga] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    
  };

  const handleLgaChange = (event) => {
    setSelectedLga(event.target.value);
  };

  return (
    <section className="location-selection">
       <img src="/location-pin icon.png" alt="Location Pin Icon" className="location-icon" />
      <h2>Select Your Location</h2>
      <div className="dropdowns">
        <div className="dropdown">
          <label htmlFor="state">State</label>
          <select id="state" value={selectedState} onChange={handleStateChange}>
            <option value="">Select A State</option>
            {/* Add state options here */}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="lga">Local Government Area</label>
          <select id="lga" value={selectedLga} onChange={handleLgaChange}>
            <option value="">Select An LGA</option>
            {/* Add LGA options here */}
          </select>
        </div>
      </div>
      <p className="instruction">Please Select Your State To See Available Local Government Areas.</p>
    </section>
  );
}

export default LocationSelection;