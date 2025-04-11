import React, { useState } from 'react';
import './GovernmentLevels.css';

function GovernmentLevels() {
  const [federalOpen, setFederalOpen] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);
  const [localOpen, setLocalOpen] = useState(false);

  return (
    <section className="government-levels">
      <h2>Government Levels</h2>

      <div className="level-container"> 
        <details open={federalOpen} onToggle={() => setFederalOpen(!federalOpen)}>
          <summary>
            <img src="/fedral government icon.png" alt="Federal Government Icon" className="icon" />
            Federal Government
          </summary>
          <p>National Level Government Officials</p>
          {/* more from backend  details here */}
        </details>
      </div>

      <div className="level-container"> 
        <details open={stateOpen} onToggle={() => setStateOpen(!stateOpen)}>
          <summary>
            <img src="/State icon.png" alt="State Government Icon" className="icon" />
            State Government
          </summary>
          <p>36 States + FCT Minister</p>
          {/* more from backend details here */}
        </details>
      </div>

      <div className="level-container"> 
        <details open={localOpen} onToggle={() => setLocalOpen(!localOpen)}>
          <summary>
            <img src="/local icon.png" alt="Local Government Icon" className="icon" />
            Local Government
          </summary>
          <p>774 Local Government Chairpersons</p>
          {/*  more details from backed here */}
        </details>
      </div>
    </section>
  );
}

export default GovernmentLevels;