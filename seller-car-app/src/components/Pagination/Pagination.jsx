// src/components/Pagination.js
import React from "react";
import './Pagination.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">
    <div className="indicator">
      <p>from {currentPage * 6} to {totalPages * 6}</p>
    </div>

    <div className="controls">
    <div className="icon">
        <AiOutlineArrowLeft  onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1} />
      </div>
      <div className="page-numbers">
      
      {Array.from({ length: totalPages }).map((_, index) => (
        <button key={index} onClick={() => onPageChange(index + 1)}>
          {index + 1}
          
        </button>
      ))}
      
      </div>
      <div className="icon">

      <AiOutlineArrowRight  onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages} />
      </div>
    </div>
     
    </div>
  );
}

export default Pagination;
