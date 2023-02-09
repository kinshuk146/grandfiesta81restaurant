import React from 'react';
import {SubHeading} from '../../components';
import {images,data} from '../../constants';
import './FindUs.css';

const FindUs = () => (
  <div className="FindUs app__bg  " id="contact">
    <div className="FindUs_Content app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext__cormorant" style={{marginBottom:'3rem'}}>Find Us</h1>
      <div className='workingHour_content app__wrapper-content'>
        <div>
        <p className="locationText p__opensans">Hotel Grand 81 and its restaurant are located in the heart of faridabad. Situated opposite Omaxe World Street at a 5 min drive.</p>
        </div>
        
        <div style={{margin:'0rem 0rem 0rem'}}>
        <p className="workingHours p__cormorant" style={{color:'#DCCA87'}}>Working Hours</p>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>8:00am-12:00am</p>
        <p className='p__opensans' style={{marginRight:'-1rem'}}>Saturday-Sunday</p>
        <p className='p__opensans'>8:00am-12:00am</p>
        </div>

      </div>

      <a href='https://goo.gl/maps/gi1ahVm2X4u5d6KP9' className='mapsLink'>
      <button className='custom__button' style={{marginTop:'1rem'}}>Google Maps Location</button>
      </a> 
    </div>
    
    <div className="imageHolder">
    <img src={images.gmap}/>
    </div>
  </div>
);

export default FindUs;
