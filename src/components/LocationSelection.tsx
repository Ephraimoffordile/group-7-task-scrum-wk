import React, { useState, useEffect } from 'react';
import './LocationSelection.css';

interface StateData {
  state: string;
  lgas: string[];
}

interface LocationSelectionProps {
  states: StateData[];
  setSelectedState: (state: string) => void;
  setSelectedLga: (lga: string) => void;
  selectedState?: string;
  selectedLga?: string;
}

function LocationSelection({
  setSelectedState,
  setSelectedLga,
  states,
  selectedState: propSelectedState,
  selectedLga: propSelectedLga,
}: LocationSelectionProps) {
  const [lgas, setLgas] = useState<string[]>([]);
  const [localSelectedState, setLocalSelectedState] = useState<string>(propSelectedState || '');
  const [localSelectedLga, setLocalSelectedLga] = useState<string>(propSelectedLga || '');

  useEffect(() => {
    setLocalSelectedState(propSelectedState || '');
    setLocalSelectedLga(propSelectedLga || '');
  }, [propSelectedState, propSelectedLga]);

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStateName = event.target.value;
    setLocalSelectedState(selectedStateName);
    setSelectedState(selectedStateName);
    const selectedStateData = states.find((state) => state.state === selectedStateName);
    if (selectedStateData) {
      setLgas(selectedStateData.lgas);
    } else {
      setLgas([]);
    }
    setLocalSelectedLga('');
    setSelectedLga('');
  };

  const handleLgaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLgaName = event.target.value;
    setLocalSelectedLga(selectedLgaName);
    setSelectedLga(selectedLgaName);
  };

  return (
    <div className="location-selection">
      <h2>Select Your Location</h2>
      <div className="dropdowns">
        <div className="dropdown">
          <label htmlFor="state">State:</label>
          <select id="state" value={localSelectedState} onChange={handleStateChange}>
            <option value="">Select State</option>
            {states && states.map((state) => (
              <option key={state.state} value={state.state}>
                {state.state}
              </option>
            ))}
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="lga">LGA:</label>
          <select id="lga" value={localSelectedLga} onChange={handleLgaChange}>
            <option value="">Select LGA</option>
            {lgas.map((lga) => (
              <option key={lga} value={lga}>
                {lga}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="instruction">Select your state and LGA to find relevant information.</p>
    </div>
  );
}

export default LocationSelection;