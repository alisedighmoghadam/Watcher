import React from 'react'
import { useState,useEffect } from 'react'
import SmallMovieSlides from './smallMovieSlides'
import axios from 'axios'
import LeftArrow from './leftArrow'
import RightArrow from './rightArrow'

const PopularMovies = () => {
    const [popMovies,setPopMovies]=useState(null);
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=3314664ffa608874a6c049e1f7faeb2c&language=en-US&page=1').then(res=>{
             
            setPopMovies(res.data.results);
        })
    },[]) 
    function scrollLeft(){
        
    }
    function scrollRight(){

    }
    if(popMovies!=null){
        return (
            <div id='popular-movies'>
              <h1 >top rated movies</h1>
              <div className='container-fluid row'>
              <LeftArrow func={scrollLeft} style={{padding:'0 10px'}}></LeftArrow>
              <div className='col container-fluid  pop-movies-container '>
                <div className='row  flex-row flex-nowrap '>
                    {popMovies.map((movie,index)=>{
                        return <SmallMovieSlides movie={movie} index={index}></SmallMovieSlides>
                    })}
                </div>
            </div>
             <RightArrow func={scrollRight} style={{padding:'0 10px'}}></RightArrow> 
              </div>
              
              
            </div>
          )
    }
  
}

export default PopularMovies
