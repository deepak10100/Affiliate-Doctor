import React from 'react'
import './Card.css'
function Card({title,amount,icon}) {
 
  return (
    <>
      <div className="metric-card">
      <div className="metric-title">{title}</div>
      <div className="metric-body">
        <div className="metric-icon">
          <img src={`${icon}`} alt="" srcset="" />
        </div>
        <div className="metric-value">
          <span className="value">{amount}</span>
          <span className="suffix">/month</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card