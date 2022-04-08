import React, { useState } from 'react'
import { FaClipboardCheck } from 'react-icons/fa'
import './addnotes.css';
function AddNotes(props) {
  const [notetext,setnotetext]= useState('')
  const getdate = new Date(2020,9,1);
  
  const textHandler = event =>{
    setnotetext(event.target.value);
  }
  const SubmitHandler = event =>{
    event.preventDefault();
    const notedata ={
      id:Math.floor(Math.random() * 100).toString(),
      desc:notetext,
      date:getdate.toDateString()
    }
    props.onSaveNotes(notedata)
    setnotetext('')
  }
  return (
    <div className="add-notes">
        <textarea 
        cols="30" 
        rows="10" 
        placeholder="Type-here" 
        value={notetext}
        onChange={textHandler}
        ></textarea>
        <div className="note-footer">
            <small>{getdate.toDateString()}</small>            
            <button><FaClipboardCheck size="2em" onClick={SubmitHandler}/></button>
        </div>
    </div>
  )
}

export default AddNotes