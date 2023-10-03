import React, { useState } from 'react'
import hotelsData from '../data/hotels.json'
import PropertyCard from '../PropertyCard/PropertyCard'
import Navigation from '../Navigation/Navigation';
import {CgSandClock}  from 'react-icons/cg'
import './Home.scss'

function Home() {
    const [City, setCity] = useState('View All');
    
    const [displayedProperties, setDisplayedProperties] = useState(6);
   
    // Filter Properties According to their Cityies

    const FilterCity = (e) =>{
        const NewCity = e.target.textContent;
        setCity(NewCity)
    }


    var filter = []

    hotelsData.forEach(data =>{
       
        if(City === "View All"){
            filter.push(data)
        }
        if(data.city === City){
            filter.push(data)
        }
        
    })

    
  return (<>

  <div className='main-content'>
  <div className='title'>
    <h1>Featured Listed Propery</h1>
    <p>Real estate can be bout, sold, leased, or rented, and can be a valuable investiment opportunity. The value of real estate can be...</p>
  </div>

  <Navigation filterFunction={FilterCity} />
<div className='cards-section'>
<div className='cards'>

{
    filter.slice(0,displayedProperties).map((property)=>{

        return(
            

            <PropertyCard property={property} />
            
        )
    })
}
</div>

  </div>






 {displayedProperties < filter.length && (
        <button className='Show-more' onClick={() => setDisplayedProperties(displayedProperties + 3)}> <CgSandClock /> Show More</button>
      )}
</div>
  </>
  )
}

export default Home