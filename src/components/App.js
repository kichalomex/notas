import React, {useState} from "react";
import Note from "./Note";

const App = (props) =>{
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('A new note')
  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event);
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }
    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {notes.map(x=>{
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