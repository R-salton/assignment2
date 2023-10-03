// src/App.js
import React, { useState } from "react";
import CarList from "./components/CarList/CarList";
import Pagination from "./components/Pagination/Pagination";
import SearchBar from "./components/SearchBAr/SearchBar";
import data from "./data/cars.json";
import './App.css'
import {Routes , Route, Navigate} from 'react-router-dom'
import Details from "./Pages/Details/Details";


function App() {
  const [cars, setCars] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Handle pagination change
  const onPageChange = (page) => {
    setCurrentPage(page);
    // Navigate(`/page/${page}`)
  };

  // Handle search
  const handleSearch = (searchTerm) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCars(filteredCars);
    setCurrentPage(1); // Reset to first page after search
  };

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
 

  return (
    <div className="App">
    <SearchBar onSearch={handleSearch} />
    <Routes>

    <Route path="/" element={<Navigate to="/page/1" />} /> {/* Use Navigate for redirect */}
      <Route path="/page/1" element={
     
      <CarList cars={currentCars} 
          // onPageChange={onPageChange} 
          //   currentPage={currentPage} 
          //   totalPages={Math.ceil(cars.length / carsPerPage)} 
       />
       } 
        
       /> 
       
    </Routes>
    <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(cars.length / carsPerPage)}
        onPageChange={onPageChange}
      />
    
    </div>
  );
}

export default App;
