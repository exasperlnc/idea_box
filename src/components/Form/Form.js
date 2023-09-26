
import { useState } from 'react';
import './Form.css';

function Form(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input
        type='text'
        placeholder='Description'
        name='description'
        value={description}
        onChange={event => setDescription(event.target.value)}
      />

      <button>SUBMIT</button>
    </form>
  )
}

export default Form;