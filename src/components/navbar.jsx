import React from 'react'
import '../css/navbar.css'
import { useEffect } from 'react';
import { useState } from 'react'

const Navbar = () => {
    var searchImgPath=require('../views/Search-vector.png')
    
    var [windowWidth,setWindowWidth]=useState(window.innerWidth);
    var [mobileView,setMobileView]=useState(false);
    var [showPopUp,setPopUp]=useState(false);
    var [showDeskPopUp,setDeskPopUp]=useState(false);
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
    function showDeskMenu(){
        setDeskPopUp(!showDeskPopUp)
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
                    <div className='container-fluid mobile-popup '>
                        <div className='row'>
                            <div className='col mobile-login-section'>
                                <h3>Email</h3>
                                <input type="email" name='email-login' id='email-login' />
                                <h3>Password</h3>
                                <input type="password" name="password-login" id="password-login" />
                                <button>Sign in</button>
                            </div>
                            <div className='col mobile-sign-up-section'>
                                <h3>You don't have account yet? </h3>
                                <a href=""><button>Sign up</button></a>
                            </div>
                            
                        </div>
                        <hr />
                        <div className='row mobile-search-section'>
                            <div className='col container-fluid'>
                                <h2>Looking for something? </h2>
                                <div className='navbar-search-mobile float-end'>
        
                                    <input type="text" name='search' id='search-input'/>
                                    <img src={searchImgPath} alt="" />
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            
        )
    }else{
        return (
            <div>

            
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
                        <button className='navbar-login float-end' onClick={showDeskMenu}>
                            <p>Sign in</p>
        
                        </button>
                    </div>
                    
                </div>
                
            </div>
            <div id='popup-menu-desk'className={showDeskPopUp?'show-popup':''}>
                    <div className='container-fluid mobile-popup '>
                        <div className='row'>
                            <div className='col mobile-login-section'>
                                <h3>Email</h3>
                                <input type="email" name='email-login' id='email-login' />
                                <h3>Password</h3>
                                <input type="password" name="password-login" id="password-login" />
                                <button>Sign in</button>
                            </div>
                            <div className='col mobile-sign-up-section'>
                                <h3>You don't have account yet? </h3>
                                <a href=""><button>Sign up</button></a>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    
                </div>
            </div>
          )
    }
  
}

export default Navbar
