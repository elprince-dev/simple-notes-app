import './App.css'
import Note from './components/Note'

function App() {

  const notes = [
    'first note',
    'second note',
    'nth note',
  ]

  return (
    <>
      <div className='note'>
        <h1>Simple Note App</h1>
        <Note content={"this is my first note"}/>
      </div>
    </>
  )
}

export default App
