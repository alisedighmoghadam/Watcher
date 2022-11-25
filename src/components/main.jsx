import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import PopularMovies from './popularMovies'
import Slider from './slider'
import SuggestionOfDay from './suggestionOfDay'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}
const Main = () => {
  const [movies,setMovies]=useState();
  const [trailer,setTrailer]=useState();
  const [trailerInfo,setTrailerInfo]=useState();
  function passMovie(data){
    setMovies(data);
  }
  function getRanIndex(){
    if(movies!==undefined){
      return getRandomInt(0,movies.length);
    }
  }
  function getTrailer(){
    if(movies!==undefined){
      const movie=movies[getRanIndex()];
      console.log(movie)
      axios.get('https://api.themoviedb.org/3/movie/'+movie.id+'/videos?api_key=3314664ffa608874a6c049e1f7faeb2c&language=en-US')
      .then((res)=>{
        setTrailer(res.data.results[0].key);
      })
      setTrailerInfo(movie);
    }
  }
 useEffect(()=>{
  getTrailer();
 },[movies])
     
  return (
    <div id='main'>
      <Slider passMovie={passMovie}></Slider>
      <PopularMovies></PopularMovies>
      <SuggestionOfDay trailer={trailer} trailerInfo={trailerInfo}></SuggestionOfDay>
    </div>
  )

}

export default Main
