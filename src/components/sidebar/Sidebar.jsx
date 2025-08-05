import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

import "./Sidebar.css"
import { NavLink } from 'react-router-dom';
function Sidebar() {
  const [showWallet, setShowWallet] = useState(false);
  const [showAffiliate, setShowAffiliate] = useState(true);
  return (
    <>
     <aside className="sidebar">
      <h4 className="sidebar-title">Main</h4>
      <ul className="sidebar-menu">
        <li><img src="./dashboard.svg" className='icon' alt="" srcset="" />  <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Dashboard
          </NavLink></li>
        <li><img src="./patints.svg" className='icon' alt="" srcset="" /> Patients</li>
        <li><img src="./schudule.svg" className='icon' alt="" srcset="" /> Doctor Schedule</li>
        <li><img src="./appotiment.png" className='icon' alt="" srcset="" /> Appointments</li>
        <li><img src="./chat.svg" className='icon' alt="" srcset="" />Chat</li>
        <li><img src="./consuilation.svg" className='icon' alt="" srcset="" /> Consultation</li>
        <li className="sidebar-dropdown" onClick={() => setShowWallet(!showWallet)}>
          <img src="./affiliate.svg" className='icon' alt="" srcset="" /> <span className="green">Wallet</span> <span className="arrow"> { showWallet? <IoIosArrowDown />:<IoIosArrowForward />}</span>
        </li>
        {showWallet && (
          <ul className="sidebar-submenu">
            
           <li>
             <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Dashboard
          </NavLink>
            </li>
             
            <li>
              <NavLink
            to="/refferal"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
             Referral Tool
          </NavLink>
             </li>
            
           <li>  <NavLink
            to="/earninghistory"
            className={({ isActive }) => (isActive ? 'active' : '')}
          > Earning History
          </NavLink> </li>
           
           
          </ul>
        )}
        <li className="sidebar-dropdown" onClick={() => setShowAffiliate(!showAffiliate)}>
          <img src="./affiliate.svg" className='icon' alt="" srcset="" /> <span className="green">Affiliate</span> <span className="arrow"> { showAffiliate? <IoIosArrowDown />: <IoIosArrowForward />}</span>
        </li>
        {showAffiliate && (
          <ul className="sidebar-submenu">
            
           <li>
             <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Dashboard
          </NavLink>
            </li>
            
            <li>
              <NavLink
            to="/refferal"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
             Referral Tool
          </NavLink>
             </li>
             <li>  
          <NavLink
            to="/amrutam-nari-sondarya-malt"
            className={({ isActive }) => (isActive ? 'active' : '')}
          > Amrutam Nari Sondarya Malt
          </NavLink> 
          </li>
           <li>  
          <NavLink
            to="/earninghistory"
            className={({ isActive }) => (isActive ? 'active' : '')}
          > Earning History
          </NavLink> 
          </li>
          
           
           
          </ul>
        )}
      </ul>
    </aside>
    </>
  )
}

export default Sidebar