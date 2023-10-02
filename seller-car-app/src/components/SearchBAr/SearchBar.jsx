// src/components/SearchBar.js
import React, { useState } from 'react'
import './SearchBar.scss'
import {FiSearch}  from 'react-icons/fi'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
function SearchBAr({onSearch}) {

  const[SearchTerm, setSearchTerm] = useState('');

  const handleSearch = () =>{
    onSearch(SearchTerm)
  }
  return (
    <div className='search-tab'>
    <div className='search-items'>
      <input type='text' placeholder='Search...' value={SearchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <FiSearch className='icon' onClick={handleSearch} />
    </div>
    <div className='menus'>
      <div className='item'>
      <p>Relevance</p>
      <MdOutlineKeyboardArrowDown className='icon' />
      </div>
      <div className='item'>
      <p>All Brands</p>
      <MdOutlineKeyboardArrowDown className='icon' />
      </div>
      
    </div>

    </div>
  )
}

export default SearchBAr

