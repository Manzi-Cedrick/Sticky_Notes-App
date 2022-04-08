import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './search.css'


function Search(props) {
  
    const searchGet=(event)=>{
        const newsearchtext=event.target.value
        props.onSearchHandler(newsearchtext)
    }
  return (
    <div className="search">
        <FaSearch className="FaSearch" />
        <input type="text" 
            placeholder="Search"
            onChange={searchGet}
        />
    </div>
  )
}

export default Search