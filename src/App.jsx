import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { NotesContext } from './context'
import { CreateNoteScreen } from './CreateNoteScreen'
import { EditNoteScreen } from './EditNoteScreen'
import { HomeScreen } from './HomeScreen'

function App() {
  const [notes, setNotes] = useState([{ id: 1, title: 'Note 1', content: 'Note 1 content' }, { id: 2, title: 'Note 2', content: 'Note 2 content' }])
  
  function deleteNote(id) {
    setNotes(notes.filter(note => note.id !== id))
  }

  

  return (
    <NotesContext.Provider value={{ notes, setNotes,deleteNote }}>
      <div className="App">

        <header className="App-header">
          <h1><Link to="/">Notes App ({ notes.length})</Link></h1>
          <Link to="/create">create</Link>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/create' element={<CreateNoteScreen />} />
            <Route path='/edit/:noteid' element={<EditNoteScreen />} />
          </Routes>
        </main>
        <footer>
          footer
        </footer>

      </div>
    </NotesContext.Provider>
  )
}

export default App
