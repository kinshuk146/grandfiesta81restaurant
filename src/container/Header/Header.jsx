import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components'
import './Header.css';
import {Intro} from '../../container';

{/**/}

const Header = () => (

  <div className="app__header" id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/ > 
      {/*The title is being dynamically passes to SubHeading*/}
      <h1 className="app__header-h1">Beyond the boundaries of taste</h1>  
      <p className="p__cormorant" style={{margin:'1rem 0rem'}}>Faridabad's Best Rooftop Restaurant and Banquet </p>
      <a href='https://drive.google.com/file/d/1zPacRbECw59bU7yUW31veTdAIGgs_29v/view?usp=sharing'>
      <button type="button" className="custom__button" style={{margin:'0rem 0rem'}} >Explore Menu</button></a>
    </div>

  <div className="app__wrapper_img"  >
    <img src={images.welcome}/>
  </div>
  </div>
);

export default Header;
