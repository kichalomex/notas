import React, { useState, useEffect } from "react";
import Note from "./Note";

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('A new note')
  const [showAll, setShowAll] = useState(true)
  useEffect(() => {
    console.log('Entro al Effect');
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('Entro al then');
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes');
  const addNote = (event) => {
    event.preventDefault()
    //console.log('button clicked', event);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
      //id: notes.length+1 en la realidad lo genera el servidor
    }
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        setNotes(notes.concat(response.data));
        setNewNote('')
      })
  }
  const handleNoteChange = (event) => {
    //console.log(event.target.value);
    setNewNote(event.target.value)
  }
  const notesToShow = showAll ?
    notes : notes.filter(x => x.important === true)
  const updateImportance = id => {
    console.log('actualizar importancia del id',id);
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(x => x.id === id)
    const note2 = {...note, important: !note.important}
    axios
      .put(url,note2)
      .then(response => {
        setNotes(notes.map(x => x.id!==id? x: response.data))    
      })
  }
  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {notesToShow.map(x => {
          console.log(x.id, x.content);
          return (
            <Note 
              key={x.id} 
              note={x} 
              updateImportance={() => updateImportance(x.id)}
            />
          )
        })}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default App