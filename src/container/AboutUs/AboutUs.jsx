import React from 'react';

import './AboutUs.css';
import {images} from '../../constants';
const AboutUs = () => (
  /*<div className="app__aboutus app__bg flex__center section__padding " */
  <div className="app__aboutus app__bg" id="about">
    <div className="app__aboutus-content ">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} className="spoon__img"></img>
        <p className="p__opensans">Grand Fiesta 81, Grand Celebration, delivers an experience of its name with an authentic yet elegant 
        Indian and International cuisine. Our passion is a versatile restaurant delivering the best dining experience.   </p>
        <div className="aboutus-imageContainer">
        <img src={images.gallery03}/>
        </div>
      </div>

      <div className='app__aboutus-content_knife'>
        <img src={images.knife}></img>
      </div>

      <div className="app__aboutus-content_history">
      <h1 className="headtext__cormorant">Banquet Hall and Rooms</h1>
        <img src={images.spoon} className="spoon__img spoon_history"></img>
        <p className="p__opensans">The endeavour of Grand Fiesta 81 started with the mission of providing an inspired multi cuisine restaurant to the citizens of Faridabad. In pursuit of our ambition we present to you Hotel Grand 81 and its restaurant grand fiesta 81, both providing a one of a kind experience to our clients.</p>
        <a href="mailto:booking@grandfiesta81.com">
        <button className="custom__button" style={{marginTop:'1rem'}}><b>Book Now</b> booking@grandfiesta81.com</button>
        </a>
        <div className='arrange'>
        <div className="aboutus1-imageContainer">
        <img src={images.room}/>
        </div>
        <div className="aboutus1-imageContainer">
        <img src={images.rooftop}/>
        </div>
        </div>
        
      </div>
    </div>
  </div>
);

export default AboutUs;
