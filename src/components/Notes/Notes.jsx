import React,{ useState} from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
import Dates from './Dates'
import './notes.css'
function Notes(props) {
  const onDeleteHandler =()=>{
    props.thisDeleteNotes(props.id)
  }
  return (
    <div className="notes">
        <span>{props.desc}</span>
        <div className="note-footer">
            <small><Dates dates={props.date}/></small>            
            <FaTrashAlt 
              onClick={onDeleteHandler}
            />
        </div>
    </div>
  )
}

export default Notes