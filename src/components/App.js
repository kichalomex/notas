import React, {useState} from "react";
import Note from "./Note";

const App = (props) =>{
  const [notes, setNotes] = useState(props.notes)
  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event);
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
          <input/>
          <button type='submit'>Save</button> 
        </form>
      </div>
    )
  }

  export default App