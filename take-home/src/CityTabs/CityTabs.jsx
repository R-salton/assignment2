// src/components/CityTabs.js
import React from 'react';

const CityTabs = ({ cities, activeCity, setActiveCity }) => {
  return (
    <div className="city-tabs">
      <div
        key="All" // Add a special "All" key
        className={`city-tab ${activeCity === 'All' ? 'active' : ''}`}
        onClick={() => setActiveCity('All')}
      >
        All
      </div>
      {cities.map((city) => (
        <div
          key={city}
          className={`city-tab ${city === activeCity ? 'active' : ''}`}
          onClick={() => setActiveCity(city)}
        >
          {city}
        </div>
      ))}
    </div>
  );
};

export default CityTabs;
