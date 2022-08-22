import React from 'react'
import { useState,useEffect } from 'react'
import PopularMovie from './popularMovie'
import axios from 'axios'

const PopularMovies = () => {
    const [popMovies,setPopMovies]=useState(null);
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=3314664ffa608874a6c049e1f7faeb2c&language=en-US&page=1').then(res=>{
             
            setPopMovies(res.data.results);
        })
    },[]) 
    if(popMovies!=null){
        return (
            <div id='popular-movies'>
              <h1 >top rated movies</h1>
              <div className='container-fluid  pop-movies-container '>
                <div className='row flex-row flex-nowrap '>
                    {popMovies.map((movie,index)=>{
                        return <PopularMovie movie={movie} index={index}></PopularMovie>
                    })}
                </div>
            </div>
              
              
            </div>
          )
    }
  
}

export default PopularMovies
