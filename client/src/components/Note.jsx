import React from 'react'
import '../styles/Note.css'


const Note = ({content}) => {


  return (
    <div>
        <h3>
            {content}
        </h3>
    </div>
  )
}

export default Note