import React, { useState } from 'react';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs';
import { MdVideoCameraFront } from 'react-icons/md';
import {fiestaVideo} from  '../../constants';
import {meal} from '../../constants';
import {images} from '../../constants';
import {SubHeading} from '../../components';
import './Intro.css';

const Intro = () => {
  const[playVideo,setplayVideo]=React.useState(false);
  const vidRef=React.useRef();
  const handleVideo=()=>{
    setplayVideo((prevPlayVideo)=>!prevPlayVideo)
    if(playVideo)
    {
      vidRef.current.pause()
    }
    else{
      vidRef.current.play()
    }
  }
  return(
  <div className="app__video">
    <video 
      src={meal}
      ref={vidRef}
      type="video/mp4"
      loop
      controls={false}
      muted
      />
      <div className="app__video-overlay flex__center">
        <div className="app__header app__wrapper section__padding" id="home">
          <div className='app__wrapper_info'>
          <SubHeading title="Chase the new flavour"/> 
          {/*The title is being dynamically passes to SubHeading*/}
          <h1 className="app__header-h1">The Key to Fine Dining</h1>
          <p className="p__opensans" style={{margin:'1rem 0rem'}}>Grand Fiesta 81</p>
          <a href='https://drive.google.com/file/d/1zPacRbECw59bU7yUW31veTdAIGgs_29v/view?usp=sharing'>
          <button type="button" className="custom__button" style={{margin:'0rem 0rem'}} >Explore Menu</button></a>
          </div>

          <div className="app__wrapper_img">
          <img src={images.welcome}/>
          </div>
         </div>
      </div>
  </div>
)};

export default Intro;
