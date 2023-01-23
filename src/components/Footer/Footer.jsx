import React from 'react'
import { FaHeart } from 'react-icons/fa';

function Footer() {
    const footer={
        textAlign: 'center',height: '5vh',width:'80vw',backgroundColor:'transparent',margin:'auto',display: "flex", alignItems: "center",justifyContent: 'center',position:'absolute'
    }
  return (
    <div style={footer}><span>Designed with <FaHeart style={{color:'red',margin:'0 0.4em'}} /> by Manzi Cedrick </span></div>
  )
}

export default Footer