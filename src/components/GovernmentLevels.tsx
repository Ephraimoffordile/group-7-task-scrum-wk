import React, { useState, useEffect } from 'react';
import './GovernmentLevels.css';

interface Executive {
    governor: string;
    deputyGovernor: string;
}

interface Legislature {
    speaker: string;
}

interface StateRepresentatives {
    executive: Executive;
    legislature: Legislature;
}

interface GovernmentData {
    [state: string]: StateRepresentatives;
}

function GovernmentLevels() {
    const [governmentData, setGovernmentData] = useState<GovernmentData | null>(null);
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null); 
    const [federalOpen, setFederalOpen] = useState<boolean>(false);
    const [stateOpen, setStateOpen] = useState<boolean>(false);
    const [localOpen, setLocalOpen] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/government-data.json');  
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setGovernmentData(data.data);
            } catch (error: any) {
                setError(error.message);
                console.error('Error fetching government data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading government data...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;  
    }

    if (!governmentData) {
        return <p>No government data available.</p>; 
    }

    return (
        <section className="government-levels">
            <h2>Government Levels</h2>

            <div className="level-container">
                <details open={federalOpen} onToggle={() => setFederalOpen(!federalOpen)}>
                    <summary>
                        <img src="/fedral government icon.png" alt="Federal Government Icon" className="icon" />
                        Federal Government
                    </summary>
                    <p>Governor: {governmentData.abuja.executive.governor}</p>
                    <p>Deputy Governor: {governmentData.abuja.executive.deputyGovernor}</p>
                    <p>Speaker: {governmentData.abuja.legislature.speaker}</p>
                </details>
            </div>

            <div className="level-container">
                <details open={stateOpen} onToggle={() => setStateOpen(!stateOpen)}>
                    <summary>
                        <img src="/State icon.png" alt="State Government Icon" className="icon" />
                        State Government
                    </summary>
                    {Object.keys(governmentData).filter(key => key !== 'abuja').map(state => (
                        <div key={state}>
                            <h3>{state.charAt(0).toUpperCase() + state.slice(1)}</h3>
                            <p>Governor: {governmentData[state].executive.governor}</p>
                            <p>Deputy Governor: {governmentData[state].executive.deputyGovernor}</p>
                            <p>Speaker: {governmentData[state].legislature.speaker}</p>
                        </div>
                    ))}
                </details>
            </div>

            <div className="level-container">
                <details open={localOpen} onToggle={() => setLocalOpen(!localOpen)}>
                    <summary>
                        <img src="/local icon.png" alt="Local Government Icon" className="icon" />
                        Local Government
                    </summary>
                    <p>774 Local Government Chairpersons</p>
                    {/* wil add more details here */}
                </details>
            </div>
        </section>
    );
}

export default GovernmentLevels;