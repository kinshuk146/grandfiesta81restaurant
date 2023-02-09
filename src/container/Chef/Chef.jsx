import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className=" chef app__bg app__wrapper " id="events">
    <div className="img_container  ">
      <img src={images.hall}/> 
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Banquet Hall and Rooftop"/>
      <h1 className="headtext__cormorant">Gallery</h1>
      <div className="app__chef-content">
        <p className="p__opensans">We offer our guests a wide range of creative and appetizing dishes and drinks and we exclusively curate them based on your preferences and occasions. Be it a party, a wedding or an important meeting we arrange everything for you. </p>
      </div>
      
    </div>
  </div>
);

export default Chef;
