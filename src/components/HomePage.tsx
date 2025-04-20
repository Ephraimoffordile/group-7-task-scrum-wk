import React from 'react';
import Header from './Header';
import LocationAndLevels from './LocationAndLevels';
import Footer from './Footer';
import Hero2 from './Hero2';
import './HomePage.css';

interface StateData {
  state: string;
  lgas: string[];
}

interface HomePageProps {
  states: StateData[];
}

function HomePage({ states }: HomePageProps) {
  return (
    <div className="home-page">
      <Header />
      <LocationAndLevels states={states} />
      <Hero2 />
      <Footer />
    </div>
  );
}

export default HomePage;
