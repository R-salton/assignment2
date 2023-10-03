import React, { useState } from 'react'
import hotelData from '../data/hotels.json'
import './Navigation.scss'
import {FaLongArrowAltRight} from 'react-icons/fa'

function Navigation({filterFunction}) {
    
  const Cities = []
  let uniqueCities =[]

  // Get Cities from Data

    hotelData.forEach(city =>{
        Cities.push(city.city)
        // Remove duplicates
         uniqueCities = [...new Set(Cities)]
    })

    const [activeCity, setActiveCity] = useState('')
    
    // Make Active Button
    const handleActive = (e) =>{
      const buttonText = e.target.textContent;
      setActiveCity(buttonText)
    }
   
   
  return (
    <div className='nav-bar'>
    <div className='cities'>

        {
            uniqueCities.map(city =>{
                return(

                <button className={activeCity === city ? 'active-button' : 'button'}  onClick={(e)=>{
                  handleActive(e)
                  filterFunction(e)
                }} key={null} >{city}</button>
                
                )
            })
        }
    </div>

        <button className='view-all' onClick={filterFunction} value="View All">View All</button>
 
    </div>
  )
}

export default Navigation