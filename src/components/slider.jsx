import React from 'react'
import { useState } from 'react'
import SliderCard from './sliderCard'
import { useEffect } from 'react';
import axios from 'axios';
import {BounceLoader} from 'react-spinners';
const Slider = () => {
    var leftArrow=require('../views/Arrow_left.png')
    var rightArrow=require('../views/Arrow_right.png')
    const [activeSlide,setActiveSlide]=useState(0);
    const [movies,setMovies]=useState(null);
    const [load,setLoad]=useState(false);
    useEffect(()=>{
        
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3314664ffa608874a6c049e1f7faeb2c&language=en-US&page=1').then(res=>{
             
            setMovies(res.data.results);
        })
        

    },[]) 
    
    const setLoadFromChild=(index)=>{
        if(index===0){
            setLoad(true);
        }
    }
    
    
    //START FROM ABOVE !!
    /* var movieObject=[{
        Name:'THOR: LOVE AND THUNDER',
        Explanation:'Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.',
        ImgUrl:'https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7273_AL_.jpg'
    },
    {
        Name:'Top Gun: Maverick',
        Explanation:'After more than thirty years of service as one of the Navy\'s top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.',
        ImgUrl:'https://m.media-amazon.com/images/M/MV5BOWQwOTA1ZDQtNzk3Yi00ZmVmLWFiZGYtNjdjNThiYjJhNzRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_Ratio0.7273_AL_.jpg'
    }] */
   
    
    function nextSlide(){
        if(activeSlide+1<movies.length){

            setActiveSlide(activeSlide+1);
        }else{
            setActiveSlide(0);
        }
    }
    function prevSlide(){
        if(activeSlide-1>-1){
            setActiveSlide(activeSlide-1);
        }else{
            
            setActiveSlide(movies.length-1)
        }
    }
    if(movies!=null){
        return (
            <>
            <div className='center loading-logo'style={{display:load?'none':'flex'}}>

            
                <BounceLoader color="#C0B9DD" />
            </div>
            <div style={{display:load?'block':'none'}}>
            <div className='slider-container container-fluid row'>
              <div className='arrows left-arrow col-auto' >
                <button onClick={prevSlide}>
                    <img src={leftArrow} alt="" />
                </button>
              </div>
              
               {movies.map((value,index)=>{
                
                return <SliderCard data={value} index={index} activeSlide={activeSlide} setLoadFromChild={setLoadFromChild}></SliderCard>
              })}  
              
              
              <div className='arrows right-arrow col-auto'>
                    <button onClick={nextSlide}>
                        <img src={rightArrow} alt="" />
                    </button>
              </div>
            </div>
            <hr></hr>
            </div>
            
            </>
          )
    }
  
}

export default Slider
