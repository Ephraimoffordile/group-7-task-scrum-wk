import React, { useState } from 'react';
import LocationSelection from './LocationSelection';
import './LocationAndLevels.css';

interface StateData {
  state: string;
  lgas: string[];
}

interface LocationAndLevelsProps {
  states: StateData[];
}

function LocationAndLevels({ states }: LocationAndLevelsProps) {
  const [activeTab, setActiveTab] = useState<string>('governmentStructure');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedLga, setSelectedLga] = useState<string>('');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="location-and-levels">
      <div className="tabs">
        <button
          className={activeTab === 'governmentStructure' ? 'active' : ''}
          onClick={() => handleTabClick('governmentStructure')}
        >
          Government Structure
        </button>
        <button
          className={activeTab === 'findRepresentatives' ? 'active' : ''}
          onClick={() => handleTabClick('findRepresentatives')}
        >
          Find Representatives
        </button>
        <button
          className={activeTab === 'governmentOffices' ? 'active' : ''}
          onClick={() => handleTabClick('governmentOffices')}
        >
          Government Offices
        </button>
        <button
          className={activeTab === 'reportIssue' ? 'active' : ''}
          onClick={() => handleTabClick('reportIssue')}
        >
          Report Issue
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'governmentStructure' && (
          <div className="government-structure">
            <LocationSelection
              states={states}
              setSelectedState={setSelectedState}
              setSelectedLga={setSelectedLga}
              selectedState={selectedState}
              selectedLga={selectedLga}
            />
            <div className="government-levels">
              <div className="level">
                <h3>Federal Government</h3>
                <p>National Level Government Officials</p>
              </div>
              <div className="level">
                <h3>State Government</h3>
                <p>36 States + FCT Minister</p>
              </div>
              <div className="level">
                <h3>Local Government</h3>
                <p>774 Local Government Chairpersons</p>
              </div>
            </div>
          </div>
        )}

        {/* ... other tab content ... */}
      </div>
    </div>
  );
}

export default LocationAndLevels;