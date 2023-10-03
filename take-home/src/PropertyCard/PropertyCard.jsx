
import React from 'react';
import { Link } from 'react-router-dom';
import {FaRegHeart} from 'react-icons/fa'
import {MdOutlineLocationOn} from 'react-icons/md';
import{TbBuildingSkyscraper} from 'react-icons/tb';
import {IoBedOutline} from 'react-icons/io5';
import {LuBath} from 'react-icons/lu';
import {RiDragMove2Line} from 'react-icons/ri'
import './Property.scss'

const PropertyCard = ({ property }) => {
  return (
   

    <div className='card' key={property.id}>
    <div className='card-contents'>
      <div className='card-header'>
        <img src={property.image1} alt='' />
        <div className='for-rent'>
          <button className='forent-btn'>For Rent</button>
          <div className="icon">

          <FaRegHeart  />
          </div>
        </div>
        
      </div>
      <div className='card-details'>
        <div className='location'>
          <MdOutlineLocationOn className="loc-icon" />
          <p>{property.location}</p>
        </div>
        <h2>{property.name}</h2>
        <div className='specification'>
          <div className='spec-item'>
            <TbBuildingSkyscraper className="spec-icon" />
            <p>{property.rooms} Room</p>
          </div>
          <div className='spec-item'>
            <IoBedOutline className="spec-icon" />
            <p>{property.beds} Bed</p>
          </div>
          <div className='spec-item'>
            <LuBath className="spec-icon" />
            <p>{property.bath} Bath</p>
          </div>
          <div className='spec-item'>
            <RiDragMove2Line className="spec-icon" />
            <p>334 sft</p>
          </div>
        </div>
        <div className='footer'>
        
          <p className='price'>$ {property.price} <span>/month</span></p>
          <Link to={`/property/${property.id}`}>
          <div className='read-more'>
          <p className='read'>Read More</p>
          </div>
          </Link>
        </div>

      </div>
    </div>
    </div>
    
   
  ); 
};



export default PropertyCard;
