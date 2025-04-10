import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Hero.css'; 

function Hero() {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
    
    const handleSearchSubmit = () => {
        
        console.log('Searching for:', searchQuery);
    
      };

      return (
        <div className="hero">
          <h1>Connect with Your Government Representatives</h1>
          <p className="tagline">Transparent governance through blockchain technology</p>
          <div className="search-bar-container">
            <input 
            type= "text"
            className='search-input'
            placeholder="Search by issue (e.g., education, roads, electricity)"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
         <button className="search-button" onClick={handleSearchSubmit}>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <span className="search-text">Search</span>
        </button>
      </div>
    </div>
  );
}


export default Hero; 