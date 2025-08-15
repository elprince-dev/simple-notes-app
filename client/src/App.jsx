import './App.css'
import Note from './components/Note'
import data from './data/notes.json'

function App() {

  const notes = data.notes

  return (
    <div className='app'>

        <h1>Simple Note App</h1>

        <div className='notes'>
          {notes.map(note => (
            <Note content={note.content} key={note.id}/>
          ))}
        </div>
        


    </div>
  )
}

export default App
