import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


const SmallMovieSlides = ({movie,index}) => {
  const [movieTime,setMovieTime]=useState(null);

    useEffect(()=>{
      axios.get('https://api.themoviedb.org/3/movie/'+movie.id+'?api_key=3314664ffa608874a6c049e1f7faeb2c&language=en-US')
      .then((result)=>{
        setMovieTime(result.data)
      })
    },[]);
    function calcTime(){
      let HH,MM;
      MM=movieTime.runtime%60;
      HH=Math.round(movieTime.runtime/60);
      if(HH===0){
        return MM+'m'
      }else{
        return HH+'h '+MM+'m' 
      }
    }
    
    if(movieTime!=null){
      return (
        <div className='col'>
            <div className='pop-movie-card' style={{backgroundImage:"url('https://image.tmdb.org/t/p/original"+movie.poster_path+"')"}}>
              <div className='pop-movie-card-info-container'>
                <div className='pop-movie-card-info'>
                  <h6>{movie.title}</h6>
                  <p>{calcTime()} - {movieTime.genres[0].name}</p>
                </div>
                
              </div>
            </div>
        </div>
      )
    }
    
}

export default SmallMovieSlides
