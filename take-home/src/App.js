// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PropertyDetail from './components/PropertyDetail/PropertyDetail';
import Home from './Home/Home';

const App = () => {
  return (
   
      <div className="App">
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
        </Routes>
      </div>
   
  );
};

export default App;
