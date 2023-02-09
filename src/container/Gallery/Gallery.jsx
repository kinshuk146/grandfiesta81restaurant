import React from 'react';
import {images,data} from  '../../constants';
import {SubHeading} from '../../components';
import {BsInstagram,BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  const scrollRef=React.useRef(null);
  const scrollRef1=React.useRef(null);
  const scrollRef2=React.useRef(null);

  const scroll=(direction)=>{
    const {current}= scrollRef;

    if(direction==='left')
    {
      current.scrollLeft-=300;
    }else{
      current.scrollLeft+=300;
    }
  }

  const scroll1=(direction)=>{
    const {current}= scrollRef1;

    if(direction==='left')
    {
      current.scrollLeft-=300;
    }else{
      current.scrollLeft+=300;
    }
  }

  const scroll2=(direction)=>{
    const {current}= scrollRef2;

    if(direction==='left')
    {
      current.scrollLeft-=300;
    }else{
      current.scrollLeft+=300;
    }
  }

  return(
    <div className="super" id="gallery">
      <h1 className="headtext__cormorant_gallery " > Events</h1>
    <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="New Years' Party"/>
      <p className='a__gallery-content_p' >Glimpse of the New Year Eve Bash!🥳.. at the Grand Fiesta 81.. A part of Hotel grand 81.. Take a sneak peak into the astonishing evening and get ready for the upcoming events. </p>
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        <div className="app__gallery-images_card flex__center">
          <img src={images.a}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.b}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.c}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.d}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.e}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.f}/>
        </div>
        
      </div>
      <div className="app__gallery-images_arrows">
        
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>scroll('left')}/>
        <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>scroll('right')}/>
      </div>

    </div>

  </div>

  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="Wedding functions"/>
      <p className='a__gallery-content_p' >Whether a grand Indian celebration with many ceremonies and events or an intimate ceremony witnessed by your nearest and dearest—you are the theme, the main characters, and the celebration. Grand fiesta 81 takes pride in providing you with truly personalised service to help set the stage for your special moments.</p>
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef1}>
        <div className="app__gallery-images_card flex__center">
          <img src={images.a1}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.a2}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.a3}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.a4}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.a5}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.a6}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.a7}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.a8}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.aa1}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.aa2}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.aa3}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.aa4}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.aa5}/>
        </div>
        
      </div>
      <div className="app__gallery-images_arrows">
        
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>scroll1('left')}/>
        <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>scroll1('right')}/>

      </div>

    </div>
    

  </div>
  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title="Birthday parties"/>
      <p className='a__gallery-content_p' >Be it a birthday celebration of a school going kid based on a kid's theme party, or a corporate event; we can fulfil the needs of all. We believe that it's our devotion towards delivering quality service that has kept us ahead of the competitors. </p>
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef2}>
        <div className="app__gallery-images_card flex__center">
          <img src={images.h1}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.h2}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.h3}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.h4}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.h5}/>
        </div>
        <div className="app__gallery-images_card flex__center">
          <img src={images.h6}/>
        </div>
        
      </div>
      <div className="app__gallery-images_arrows">
        
        <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>scroll2('left')}/>
        <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>scroll2('right')}/>
      </div>

    </div>

  </div>
  
  <a href="mailto:booking@grandfiesta81.com">
      <button type="button" className="custom__button " style={{margin:'2rem 0rem',justifyContent:'center'}} >Inquire now at <b>booking@grandfiesta81.com</b></button>
      </a>
  </div>
)};

export default Gallery;
