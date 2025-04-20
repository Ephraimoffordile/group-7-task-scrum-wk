import React, { useState } from 'react';
import './Tabs.css';

function Tabs() {
  const [activeTab, setActiveTab] = useState<string>('government-structure');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <nav className="tabs">
      <button
        className={activeTab === 'government-structure' ? 'active' : ''}
        onClick={() => handleTabClick('government-structure')}
      >
        Government Structure
      </button>
      <button
        className={activeTab === 'find-representatives' ? 'active' : ''}
        onClick={() => handleTabClick('find-representatives')}
      >
        Find Representatives
      </button>
      <button
        className={activeTab === 'government-offices' ? 'active' : ''}
        onClick={() => handleTabClick('government-offices')}
      >
        Government Offices
      </button>
      <button
        className={activeTab === 'report-issue' ? 'active' : ''}
        onClick={() => handleTabClick('report-issue')}
      >
        Report Issue
      </button>
    </nav>
  );
}

export default Tabs;