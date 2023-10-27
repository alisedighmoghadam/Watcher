import React from "react";
import "../css/navbar.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  var searchImgPath = require("../views/Search-vector.png");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileView, setMobileView] = useState(false);
  const [showPopUp, setPopUp] = useState(false);
  const [showDeskPopUp, setDeskPopUp] = useState(false);
  const [openAgain, setOpenAgain] = useState(true);
  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth > 800) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
  }, [windowWidth]);
  useEffect(() => {
    function handleClickOutside(event) {
      console.log(showDeskPopUp);
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDeskPopUp(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  function showMenu() {
    setPopUp(!showPopUp);
  }
  function showDeskMenu() {
    console.log(openAgain);
    if (openAgain) {
      setDeskPopUp(!showDeskPopUp);
    }
    setOpenAgain(true);
  }

  if (mobileView) {
    return (
      <>
        <div
          id="navbar"
          className="container-fluid d-flex justify-content-between"
        >
          <div className="col-sm-2 ">
            <div className="main-logo col">
              <Link to="/">
                <p>
                  W<span>atcher</span>
                </p>
              </Link>
            </div>
          </div>

          <div className="col-sm-1 navbar-right-container  ">
            <div>
              <div
                id="nav-icon"
                onClick={showMenu}
                className={showPopUp ? "open" : ""}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div id="popup-menu" className={showPopUp ? "show-popup" : ""}>
          <div className="container-fluid mobile-popup ">
            <div className="row">
              <div className="col mobile-login-section">
                <h3>Email</h3>
                <input type="email" name="email-login" id="email-login" />
                <h3>Password</h3>
                <input
                  type="password"
                  name="password-login"
                  id="password-login"
                />
                <button>Sign in</button>
              </div>
              <div className="col mobile-sign-up-section">
                <h3>You don't have account yet? </h3>
                <Link to="/signup">
                  <button>Sign up</button>
                </Link>
              </div>
            </div>
            <hr />
            <div className="row mobile-search-section">
              <div className="col container-fluid">
                <h2>Looking for something? </h2>
                <div className="navbar-search-mobile float-end">
                  <input type="text" name="search" id="search-input" />
                  <img src={searchImgPath} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          id="navbar"
          className="container-fluid justify-content-md-center d-flex"
        >
          <div className="col-sm-1 container-fluid">
            <div className="main-logo col">
              <Link to="/">
                <p>
                  W<span>atcher</span>
                </p>
              </Link>
            </div>
          </div>

          <div className="col row navbar-right-container ">
            <div className="col-md-3 navbar-search-container">
              <div className="navbar-search float-end">
                <input type="text" name="search" id="search-input" />
                <img src={searchImgPath} alt="" />
              </div>
            </div>
            <div className="col-sm-1 navbar-login-container">
              <button
                className="navbar-login float-end"
                onClick={showDeskMenu}
                ref={buttonRef}
              >
                <p>Sign in</p>
              </button>
            </div>
          </div>
        </div>
        <div
          id="popup-menu-desk"
          ref={wrapperRef}
          className={showDeskPopUp ? "show-popup" : ""}
        >
          <div className="container-fluid mobile-popup ">
            <div className="row">
              <div className="col mobile-login-section">
                <h3>Email</h3>
                <input type="email" name="email-login" id="email-login" />
                <h3>Password</h3>
                <input
                  type="password"
                  name="password-login"
                  id="password-login"
                />
                <button>Sign in</button>
              </div>
              <div className="col mobile-sign-up-section">
                <h3>You don't have account yet? </h3>
                <Link to="/signup">
                  <button>Sign up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Navbar;
