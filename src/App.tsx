import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderMobile from './components/HeaderMobile';
import Header from './components/Header';
import Hero2 from './components/Hero2';
import LocationSelection from './components/LocationSelection';
import Tabs from './components/Tabs';
import GovernmentLevels from './components/GovernmentLevels';
import Footer from './components/Footer';
import './App.css';

interface StateData {
    state: string;
    lgas: string[];
}

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [states, setStates] = useState<StateData[]>([]);
    const [selectedState, setSelectedState] = useState<string>('');
    const [selectedLga, setSelectedLga] = useState<string>('');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        const fetchStatesData = async () => {
            try {
                const response = await fetch('/nigeria-states-lgas.json');
                const data = await response.json();
                setStates(data.states);
            } catch (error) {
                console.error('Error fetching states:', error);
            }
        };

        fetchStatesData();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Router> 
            <div className="App">
                {isMobile ? <HeaderMobile /> : <Header />}
                <Hero2 />
                <div className="content-container">
                    <LocationSelection
                        states={states}
                        setSelectedState={setSelectedState}
                        setSelectedLga={setSelectedLga}
                        selectedState={selectedState}
                        selectedLga={selectedLga}
                    />
                    <Tabs />
                    <GovernmentLevels />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;