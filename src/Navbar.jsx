// Navbar.js
import React from 'react';
import logo from './assets/react.svg'

const Navbar = ({ toggleSidebar }) => {
  return (
    <div >
      <div className="res-sidenav" id="res">
        <div className="rev-logo">
          <img src={logo} alt="" />
        </div>
        <div className="rev-title"><span>Exercises</span></div>
        <div className="rev-button">
          <i className="fa-solid fa-bars" id="open" style={{ color: '#929da5' }} onClick={toggleSidebar}></i>
          <i className="fa-solid fa-xmark" id="close" style={{ color: '#929da5', display: 'none' }} onClick={toggleSidebar}></i>
        </div>
      </div>
      <div className="sidenav">
        <div className="nav-logo">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="logo1">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="nav-section">
          <div className="nav-section1">
            <a href="./index.html">
              <div className="nav-exercises tcolor">
                <i className="fa-solid fa-dumbbell" style={{ color: '#929da5', padding: '5px 5px 0 0' }}></i>
                <span>Exercises</span>
              </div>
            </a>
            <a href="./routines.html">
              <div className="nav-routines tcolor">
                <i className="fa-solid fa-table-list" style={{ color: '#929da5' }}></i>
                <span>Routines</span>
              </div>
            </a>
            <a href="./calculators.html">
              <div className="nav-calculators tcolor">
                <i className="fa-solid fa-calculator" style={{ color: '#929da5' }}></i>
                <span>Calculators</span>
              </div>
            </a>
            <div className="nav-blogs tcolor">
              <i className="fa-solid fa-blog" style={{ color: '#929da5' }}></i>
              <span>Blogs</span>
            </div>
          </div>
          <div className="nav-section2">
            <div className="signin">
              <i className="fa-solid fa-circle-user" style={{ color: '#929da5', padding: '5px' }}></i>
              <span>Sign In</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-button">
        <div className="sbtn">Select Exercise</div>
      </div>
    </div>
  );
};

export default Navbar;
