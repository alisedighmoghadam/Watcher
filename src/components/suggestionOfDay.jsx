import React from 'react'
import { useEffect,useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {BounceLoader} from 'react-spinners';

const SuggestionOfDay = ({trailer, trailerInfo}) => {
  
 const [hideInfo,setHideInfo]=useState(false);
 useEffect(()=>{
  setTimeout(function(){
    setHideInfo(true);
  },8000)
 },[hideInfo])
 function showInfo(){
  setHideInfo(false);
 }
  
      if(trailerInfo!==undefined&&trailer!==undefined){ 
        console.log(trailer);
        return (
          <>
          <div className='video-cover' onMouseEnter={showInfo} onMouseOver={showInfo}>
            <div className='video-exp-container' style={{opacity:hideInfo?"0":"1"}}>
              <h3>{trailerInfo.title}</h3>
              <p>{trailerInfo.overview}</p>
            </div>
          </div>
          <div className='video-background'>
            
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailer+"?version=3&autoplay=1&controls=0&showinfo=0&mute=1&loop=1&modestbranding=1&showinfo=0&enablejsapi=1&&widgetid=3&playlist="+trailer} title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
          </>
        )
  }else{
    return(

    <div className='center loading-logo'style={{display:'flex'}}>

            
                <BounceLoader color="#C0B9DD" />
            </div>
    )
  }
  
}

export default SuggestionOfDay
