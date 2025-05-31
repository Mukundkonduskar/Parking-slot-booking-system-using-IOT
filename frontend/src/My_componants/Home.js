import React, { useEffect, useState } from 'react'
import './Home.css';

import { Route, useHistory } from 'react-router-dom';
import { ParkLevel } from './ParkLevel';
import Header from './Header';
import Ima1 from './parking-lot.jpg'
import Ima2 from './parkinglot.jpg'
import { Footer } from './Footer'
export const Home = () => {
   


  const history = useHistory();

  const handleBookNowClick = () => {
    history.push('/ParkLevel');
  };
  
  useEffect(() => {
   let image = document.getElementById('hero')
 setInterval(() => {
  console.log("called");
   image.style.background = `url(${Ima1})`
      
      setTimeout(() => {
        image.style.background = `url(${Ima2})`
      }, 1000);
  }, 2200);
 }, [])
 

 



  return (
    <div>
     <Header></Header>
<div className='Home' >
      
      
      <div className="parking-lot-image"
     id='hero'
      >
        <div className="text">
            <h4>Welcome to Park Your Ride</h4>
            <p>Find the perfect spot for your vehicle in our parking lot.</p>
            <button className="cta-button" onClick={handleBookNowClick}>
        Book Now
      </button>
            </div>
      </div>

      <Route path="/parklevel" component={ParkLevel} /> 
      </div>
      
    
      <Footer></Footer>
    </div>
    

     
    
  );
}