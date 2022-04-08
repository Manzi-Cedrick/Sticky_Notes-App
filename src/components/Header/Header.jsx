import React from 'react'
import DarkMode from './DarkMode'

import './header.css'
function Header(props) {
  return (
    <div className="header">
        <h2>Sticky Notes App</h2>
        <div className="button">
          <DarkMode onToggleDarkMode={props.onToggleDarkMode}/>
        </div>
    </div>
  )
}

export default Header