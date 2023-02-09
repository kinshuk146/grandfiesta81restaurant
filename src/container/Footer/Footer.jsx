import React from 'react';
import {images} from '../../constants'
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className="app__footer ">
    <div className="app__footer-links">

      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>First Floor, Vipul Plaza, Sector 81, Faridabad, Haryana 121002</p>
        <p className='p__opensans'>9871145603</p>
        <p className='p__opensans'>9810237579</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.final_logo}/>
        <p className='p__opensans'>Moments come and go but memories last forever</p>
        <img src={images.spoon} className="spoon__img" style={{marginTop:'15px'}}/>
        <div className='app__footer-links_icons'>
          <a href='https://m.facebook.com/people/Hotel-grand-81/100063774136586/'>
          <FiFacebook/>
          </a>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>

      <div className="app__footer-links_work">
      <h1 className='app__footer-headtext'>Email Address</h1>
        <p className='p__opensans'>booking@grandfiesta81.com</p>
        <p className='p__opensans'></p>
        <p className='p__opensans'></p>
        <p className='p__opensans'></p>
      </div>
    
    </div>
    <div className='footer__copyright'>
      <p className="p__opensans" style={{margin:'-2rem'}}> 2023 Grand Fiesta 81. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
