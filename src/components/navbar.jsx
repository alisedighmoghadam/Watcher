import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Navbar = () => {
    var searchImgPath=require('../views/Search-vector.png')
    
    var [windowWidth,setWindowWidth]=useState(window.innerWidth);
    var [mobileView,setMobileView]=useState(false);
    var [showPopUp,setPopUp]=useState(false);
    useEffect(()=>{
        function handleWindowResize() {
            setWindowWidth(window.innerWidth);
            
          }
          window.addEventListener('resize',handleWindowResize);
          return()=>{
            window.removeEventListener('resize',handleWindowResize);
          }
        
    },[])
    useEffect(()=>{
        if(windowWidth>800){
            setMobileView(false)
        }else{
            setMobileView(true)
        }
    },[windowWidth])
    function showMenu(){
        setPopUp(!showPopUp);
    }
    
    if(mobileView){
        return(
            <div>
                <div id='navbar' className='container-fluid d-flex justify-content-between' >
                <div className='col-sm-2 '>
                    <div  className='main-logo col'>
                        <a href="www.alisedighmoghadam.com"><p>W<span>atcher</span></p></a>
                    </div>
        
                </div>
                    
                <div className='col-sm-1 navbar-right-container  '>
                    <div>
                    <div id="nav-icon" onClick={showMenu} className={showPopUp?'open':''}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    </div>
                </div>
                
                </div>    
                <div id='popup-menu'className={showPopUp?'show-popup':''}>
                    <div className='navbar-login float-end'>
                            <p>Sign in</p>
        
                        </div>
                        <div className='navbar-search float-end'>
        
                            <input type="text" name='search' id='search-input'/>
                            <img src={searchImgPath} alt="" />
                        </div>
                </div>
            </div>
            
        )
    }else{
        return (
            <div id='navbar' className='container-fluid justify-content-md-center d-flex' >
                <div className='col-sm-1 container-fluid'>
                    <div  className='main-logo col'>
                        <a href="www.alisedighmoghadam.com"><p>W<span>atcher</span></p></a>
                    </div>
        
                </div>
                    
                <div className='col row navbar-right-container '>
                    <div className='col-md-3 navbar-search-container'>
                        <div className='navbar-search float-end'>
        
                            <input type="text" name='search' id='search-input'/>
                            <img src={searchImgPath} alt="" />
                        </div>
                    </div>
                    <div className='col-sm-1 navbar-login-container'>
                        <div className='navbar-login float-end'>
                            <p>Sign in</p>
        
                        </div>
                    </div>
                </div>
                
            </div>
          )
    }
  
}

export default Navbar
