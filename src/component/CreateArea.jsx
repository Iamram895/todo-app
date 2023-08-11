import React from 'react'

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const CreateArea = (props) => {
   
   const [isExpanded, setExpanded] = React.useState(false);

    const [note, SetNote] = React.useState({
        title: '',
        content: ''
    })

    function submitNote(event) {
        props.onAdd(note);
        SetNote({
            title: '',
            content: ''
        })
        event.preventDefault();
    }

    function handleChange(event) {
        const { name, value } = event.target;

        SetNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        }
        )
    }
  return (
    <div>
        <form className='create-note'>
            {isExpanded &&
             <input  type ="text" name='title' placeholder='Title' onChange={handleChange}
             value={note.title}
             />
            }
             <textarea name='content' onChange={handleChange}
             value={note.content} placeholder='Take a note...' rows={isExpanded ? 3 : 1}
                onClick={() => setExpanded(true)}
             
             />
           


           
            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>
        </form>
    </div>
  )
}

export default CreateArea