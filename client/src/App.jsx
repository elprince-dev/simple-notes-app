import './App.css'
import Note from './components/Note'

function App() {

  const notes = [
    'first note',
    'second note',
    'nth note',
  ]

  return (
    <div className='app'>
        <h1>Simple Note App</h1>
        <div className='notes'>
          {notes.map(note => (
          <Note content={note}/>
        ))}
        </div>
        


    </div>
  )
}

export default App
