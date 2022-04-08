import React from 'react'
import './dates.css'
function Dates(props) {
  return (
    <div className="dates">
        <span>{props.dates}</span>
    </div>
  )
}

export default Dates