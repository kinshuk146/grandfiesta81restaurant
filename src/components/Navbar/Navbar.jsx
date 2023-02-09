import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {images} from '../../constants';
import './Navbar.css';

const Navbar = () => {
const [toggleMenu,setToggleMenu]=React.useState(false);
  return(
  <nav className='app__navbar'>
    <a href='home'>
    <div className='app__navbar-logo'>
      <img src={images.final_logo}/>
    </div>
    </a>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#events">Gallery</a></li>
      <li className='p__opensans'><a href="#gallery">Events</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>
    
    <div className='app__navbar-login'>
      <a href="#login" className="p__opensans">Log In / Register</a>
      <div className='Innerdiv'></div>
      <a href="/" className='p__opensans'>Book Table</a>
    </div>
    <div className="app__navbar-smallscreen">
    <GiHamburgerMenu className="hamburger"color="#fff" fontSize={27} onClick={()=>setToggleMenu(true)}/>
    {toggleMenu&&(
      <div className="app__navbar-smallscreen_overlay slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={()=>setToggleMenu(false)}/>
        <ul className='app__navbar-smallscreen-links'>
        <li className='p__opensans'><a href="#home" onClick={()=>setToggleMenu(false)}>Home</a></li>
        <li className='p__opensans'><a href="#about" onClick= {()=>setToggleMenu(false)}>About</a></li>
        <li className='p__opensans'><a href="#events" onClick={()=>setToggleMenu(false)}>Gallery</a></li>
        <li className='p__opensans'><a href="#gallery" onClick={()=>setToggleMenu(false)}>Events</a></li>
        <li className='p__opensans'><a href="#menu" onClick={()=>setToggleMenu(false)}>Menu</a></li>
        <li className='p__opensans'><a href="#contact" onClick={()=>setToggleMenu(false)}>Contact</a></li>
    </ul>
    </div>
    )}
</div>
  </nav>
)};

export default Navbar;
