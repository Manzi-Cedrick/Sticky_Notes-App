import React from 'react'
import './rendernotes.css'
import Notes from './Notes'
function RenderNotes(props) {
    const thisDeleteNotes =id=>{
        props.thisDeleteNotes(id)
    }
  return (
    <div className="RenderNotes">
        {props.notesdata.length != 0 ? (props.notesdata.map((notes) =>(
            <Notes key={notes.id} id={notes.id} desc={notes.desc} date={notes.date} thisDeleteNotes={thisDeleteNotes} />
        ))):(
            <p>There is no sticky notes</p>
        )}
    </div>
  )
} 

export default RenderNotes