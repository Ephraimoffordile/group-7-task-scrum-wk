import React, { useState, useEffect } from 'react';
import HeaderMobile from './components/HeaderMobile';
import Header from './components/Header';
import Hero2 from './components/Hero2';
import LocationSelection from './components/LocationSelection';
import Tabs from './components/Tabs';
import GovernmentLevels from './components/GovernmentLevels';
import Footer from './components/Footer';

import './App.css'; 

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? <HeaderMobile /> : <Header />}
      <Hero2 />
      <div className="content-container"> {/* Added container */}
        <LocationSelection />
        <Tabs />
        <GovernmentLevels />
      </div>
      <Footer />
    </div>
  );
}

export default App;