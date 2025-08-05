import React, { useState } from 'react';
import './TopFilters.css';

const TopFilters = () => {
      const [activeTab, setActiveTab] = useState("Month So Far");
       const tabs = ["Today So Far", "Week So Far", "Month So Far", "Custom"];
  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
          {activeTab === tab && <div className="underline" />}
        </button>
      ))}
    </div>
  );
};

export default TopFilters;