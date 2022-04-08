import React from 'react'
import { FaToggleOn } from 'react-icons/fa'

function DarkMode(props) {
  return (
    <FaToggleOn size='2em' style={{cursor:'pointer'}}
    onClick={()=>props.onToggleDarkMode((previousDarkmode) => !previousDarkmode)}
    />
  )
}

export default DarkMode