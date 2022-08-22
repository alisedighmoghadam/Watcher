import React from 'react'
import { useState } from 'react'

const SliderCardExp = ({text,fontColor}) => {
  const [expand,setExpand]=useState(false);
  function changeTextSize(){
    setExpand(!expand);
  }
  if(text.length<200){
    return (
        <>
          <p style={{color:fontColor?'#DDDDDD':'#292929'}}>{text}</p>
        </>
  
    
  )}else{
    
    if(expand){
        return (
            <>
          <p className='text-expand' style={{color:fontColor?'#DDDDDD':'#292929'}}>{text} </p>
          <div className='container-fluid row extender-container' >
          <hr style={{color:fontColor?'#DDDDDD':'#292929'}} className='line-closed'/>
            <button  onClick={changeTextSize} >
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="26" viewBox="0 0 70.152 37.09" style={{transform:'rotate(180deg)',WebkitTransform:'rotate(180deg)',msTransform:'rotate(180deg)'}} >
                    <line id="Line_7" data-name="Line 7" x2="34" y2="35" transform="translate(1.076 1.045)" style={{stroke:fontColor?'#DDDDDD':'#292929'}} fill="none"  stroke-width="3"/>
                    <line id="Line_8" data-name="Line 8" x1="34" y2="35" transform="translate(35.076 1.045)" fill="none" style={{stroke:fontColor?'#DDDDDD':'#292929'}} stroke-width="3"/>
                </svg> 
            </button>
          </div>
        </>
        )
    }else{
        return (
            <>
          <p className='text-collapsed' style={{color:fontColor?'#DDDDDD':'#292929'}}>{text} </p>
          <div className='container-fluid row extender-container' >
            <hr style={{color:fontColor?'#DDDDDD':'#292929'}}/>
            <button  onClick={changeTextSize} >
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="26" viewBox="0 0 70.152 37.09" >
                    <line id="Line_7" data-name="Line 7" x2="34" y2="35" transform="translate(1.076 1.045)" style={{stroke:fontColor?'#DDDDDD':'#292929'}} fill="none"  stroke-width="3"/>
                    <line id="Line_8" data-name="Line 8" x1="34" y2="35" transform="translate(35.076 1.045)" fill="none" style={{stroke:fontColor?'#DDDDDD':'#292929'}} stroke-width="3"/>
                </svg> 
            </button>
          </div>
          
        </>
        )
    }
  }
}

export default SliderCardExp
