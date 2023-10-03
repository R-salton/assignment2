// src/components/PropertyDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import hotelsData from '../../data/hotels.json';
import PropertyCard from '../../PropertyCard/PropertyCard';

const PropertyDetail = ({oneProperty}) => {
  const { id } = useParams();
   oneProperty = hotelsData.find((hotel) => hotel.id === parseInt(id));

  if (!oneProperty) {
    return <div>Property not found</div>;
  }
  

  return (
    <div className="property-detail">
      <PropertyCard property={oneProperty} />
    </div>
  );
};

export default PropertyDetail;
