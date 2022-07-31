import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { average } from 'color.js'
const SliderCard = ({data,index,activeSlide,setLoadFromChild}) => {
  
  
  
  const [dominantColor,setDominantColor]=useState({r:'222',g:'217',b:'226'});
  const [fontColor,setFontColor]=useState(false)
  useEffect(()=>{
    
    average('https://image.tmdb.org/t/p/original'+data.poster_path+'?dummy').then(color=>{
      
      let sameAsBackground=color.every(e=>{
        return e===41;
      })
      
      if(!sameAsBackground){
        setDominantColor({r:color[0].toString(),g:color[1].toString(),b:color[2].toString()});
        
      }
      setFontColor(color.every(e=>{
        return e<180;
      }))
      
      setLoadFromChild(index)
       
    })
    
   /*  axios.get('https://api.sightengine.com/1.0/check.json', {
    params: {
      'url': data.ImgUrl,
      'models': 'properties',
      'api_user': '1286468085',
      'api_secret': '2ZYMrQviHU5rLphFqQPu',
    }
  })
  .then(function (response) {
    // on success: handle response
    
    if(response.data.colors.dominant.hex !=='#292929'){
      setDominantColor(response.data.colors.dominant)

    }
    if(Number(response.data.colors.dominant.r)<180&&Number(response.data.colors.dominant.g)<180&&Number(response.data.colors.dominant.b)<180){
      setFontColor(true)
    } 
  })
  .catch(function (error) {
    // handle error
    if (error.response) console.log(error.response.data);
    else console.log(error.message);
  });*/
  },[])
  
  
  
  if(index===activeSlide){
    return (
    
        <div className='slider-card container col row active-slide' style={{background: 'linear-gradient(90deg, rgb('+dominantColor.r+','+dominantColor.g+','+dominantColor.b+') 0%,  rgb('+(dominantColor.r-50)+','+(dominantColor.g-50)+','+(dominantColor.b-50)+') 100%'}}>
          <div className='slider-card-img-container col-lg-3' style={{backgroundImage:"url('https://image.tmdb.org/t/p/original"+data.poster_path+"')"}}>
  
              
          </div>
          <div className='slider-card-exp-container col' >
              
              <h2 style={{color:fontColor?'#DDDDDD':'#292929'}}>{data.original_title}</h2>
              <p style={{color:fontColor?'#DDDDDD':'#292929'}}>{data.overview}</p>
  
          </div>
        </div>
      
    )
  }else{
    return (
    
        <div className='slider-card container col row' style={{background: 'linear-gradient(90deg, rgb('+dominantColor.r+','+dominantColor.g+','+dominantColor.b+') 0%,  rgb('+(dominantColor.r-50)+','+(dominantColor.g-50)+','+(dominantColor.b-50)+') 100%'}}>
          <div className='slider-card-img-container col-lg-3' style={{backgroundImage:"url('"+data.ImgUrl+"')"}}>
  
              
          </div>
          <div className='slider-card-exp-container col'>
              
              <h2 style={{color:fontColor?'white':'#292929'}}>{data.original_title}</h2>
              <p style={{color:fontColor?'#DDDDDD':'#292929'}}>{data.overview}</p>
  
          </div>
        </div>
      
    )
  }
    
}

export default SliderCard
