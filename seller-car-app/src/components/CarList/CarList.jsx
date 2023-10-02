
import React from "react";
import './CarList.scss'
import {GoPeople} from 'react-icons/go';
import {AiOutlineHeart}  from 'react-icons/ai'
import {LuFuel} from 'react-icons/lu';
import {BsSpeedometer2} from 'react-icons/bs'
import {GiSteeringWheel} from 'react-icons/gi'
import { Link } from "react-router-dom";

function CarList({cars}) {
  return (
    <div className="car-list">
    {cars.map((car) => (
        <div key={car.id}>
        <Link to={`/details/${car.id}`}>
          <div className="container" key={car.id}>
          <div className="image">

            <img className="image" src={car.image} alt="" />
          </div>
            <div className="car-contents">
              <div className="title">
                <h1>{car.name} </h1>
                <p>{car.Year}</p>
              </div>
              <div className="spec">
                <div className="spec-item">

                  <GoPeople className="icon" />
                  <p>{car.sits} people</p>
                </div>
                <div className="spec-item">

                  <LuFuel className="icon" />
                  <p>{car.fuel}</p>
                </div>
                <div className="spec-item">

                  <BsSpeedometer2 className="icon" />
                  <p>{car.speed}Km/ 1-litre</p>
                </div>
                <div className="spec-item">

                  <GiSteeringWheel className="icon" />
                  <p>{car.transformation}</p>
                </div>

              </div>
              <hr />
              <div className="pricing">
              <h3>${car.payment}<span> /month</span></h3>
              <div className="buttons">
                <div className="icon">
                <AiOutlineHeart />
                </div>
                <button>Rent Now</button>
              </div>

              </div>
            </div>

          </div>

          </Link>
          </div>


        
          
          ))}

          
    </div>
  );
}

export default CarList;
