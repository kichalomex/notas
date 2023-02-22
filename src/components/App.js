import React, {useState} from "react";
import Note from "./Note";

const App = (props) =>{
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('A new note')
  const [showAll, setShowAll] = useState(true)
  const addNote = (event) => {
    event.preventDefault()
    //console.log('button clicked', event);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      imortant: Math.random()<0.5,
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