import React, {useState, useEffect} from "react";
import Note from "./Note";
import axios from 'axios';


const App = () =>{
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('A new note')
  const [showAll, setShowAll] = useState(true)
  useEffect(() =>{
    console.log('Entro al Effect');
    axios
      .get('http://localhost:3001/notes')
      .then(response =>{
          console.log('Entro al then');
          setNotes(response.data)
    })
  },[])
  
  const addNote = (event) => {
    event.preventDefault()
    //console.log('button clicked', event);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random()<0.5,
      id: notes.length+1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  const handleNoteChange = (event) => {
    //console.log(event.target.value);
    setNewNote(event.target.value)
  }
  const notesToShow = showAll ? 
    notes : notes.filter(x => x.important===true)
    return (
      <div>
        <h1>Notes</h1>
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll? 'important' : 'all'}
        </button>
        <ul>
          {notesToShow.map(x=>{
            console.log(x.id, x.content);
            return(
              <Note key={x.id} note={x}/>
            )
          })}
        </ul>
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange}/>
          <button type='submit'>Save</button> 
        </form>
      </div>
    )
  }

  export default App