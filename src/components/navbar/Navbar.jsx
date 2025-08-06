import React from 'react'
import {  NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar({onclick}) {
  
  return (
    <>
   <nav className="navbar">
     
      <div className="navbar-left">
        <div className="logo"><NavLink to={'/'}>
          <img src="./logo.png" alt="" srcset="" />
          </NavLink></div>

        <button onClick={onclick} className="menu-icon">
          <img src="./menu.svg
          " alt="" srcset="" />
        </button>

        <div className="search-container">
          <img id='logo' src="./form.svg" alt="" srcset="" />
          <input type="text" placeholder="Search here" />
        </div>
      </div>

     
      <div className="navbar-right">
        <div className=" icon mail">
          <img src="./msg.svg" className='icon' alt="" srcset="" />
          <span className="dot"></span>
        </div>
        <div className="icon bell">
                    <img src="./noti.svg" className='icon' alt="" srcset="" />
          <span className="dot"></span>
        </div>

        <div className="user-details">
          <div className="name">Dr.Liam Michael</div>
          <div className="role">Doctor</div>
        </div>

        <img
          src="./person.png" 
          alt="User"
          className="user-img"
        />

        <div className="icon settings">
                    <img src="./setting.svg" className='icon' alt="" srcset="" />
        </div>
      </div>
    </nav>
   
    </>
  )
}

export default Navbar