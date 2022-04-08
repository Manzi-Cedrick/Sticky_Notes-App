
import React,{ useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AddNotes from './components/NewNotes/AddNotes'
import RenderNotes from './components/Notes/RenderNotes'
import Search from './components/Search/Search'
const dummy_data=[{
  id: 1,
  desc:'Cooking',
  date:'Thu Oct 12 2022'
},{
  id:2,
  desc:'Lorem ipsum',
  date:'Wed Sep 25 2021'
},
  {
    id: 3,
    desc:'Learning Math',
    date:'Fri Oct 31 2020'
  }
,{
  id:4,
  desc:'React Coding',
  date:'Thu Oct 12 1970'
}
]

function App() {
const [notesdata,setnotesdata]= useState(dummy_data)
const [searchedText,setSearchText]= useState('')
const [Darktheme,setDarktheme]= useState(false)


useEffect(()=>{
  const savedstickynotes = JSON.parse(localStorage.getItem('sticky-notes'));
  if(savedstickynotes){
    setnotesdata(savedstickynotes)
  }else{
    console.log('Data is not well retrieved')
  }
}, [])
useEffect(()=>{
  localStorage.setItem('sticky-notes', JSON.stringify(notesdata)) 
},[notesdata])
const onSaveNotes = (newnote) => {
  const newwholenotes = [...notesdata,newnote]
  setnotesdata(newwholenotes)
}

const thisDeleteNotes = (ids)=>{
  const newwholenotes = notesdata.filter((note)=> note.id != ids);
  setnotesdata(newwholenotes)
}
const onSearchHandler = (searchtext)=>{
  setSearchText(searchtext)
}
const onToggleDarkMode =(themes)=>{
  setDarktheme(themes)
} 
  return (
    <div className={`${Darktheme && 'dark-theme'}`}>
    <div className="App">
    <Header onToggleDarkMode={onToggleDarkMode}/>
    <Search onSearchHandler={onSearchHandler}/>
    <div className="render">
        <div className="apps">
        <AddNotes onSaveNotes={onSaveNotes}/>
        </div>
        <RenderNotes notesdata={notesdata.filter((note)=> note.desc.toLowerCase().includes(searchedText))} thisDeleteNotes={thisDeleteNotes} />
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default App
