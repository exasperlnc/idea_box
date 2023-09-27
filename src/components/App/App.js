import { useState, useEffect } from 'react'; 
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form'
import './App.css';

function App(){
  const dummyIdeas = [
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
    ]
  const [ideas, setIdeas] = useState(dummyIdeas)
 
  function deleteIdea(id){
    fetch('http://localhost:3001/api/v1/ideas/${id}')
    .then(response => {
      const filteredIdea = ideas.filter(idea => idea.id !== id)
      setIdeas(filteredIdea)
    })
    .catch(error => console.log(error.message))
  }
  
  function addIdea(newIdea) {
    fetch('http://localhost:3001/api/v1/ideas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIdea), 
    })
    .then(response => response.json())
    .then(data => setIdeas([...ideas, data]))
    .catch(error => console.log(error.message)) 
  }

  function getIdeas() {
    fetch('http://localhost:3001/api/v1/ideas')
    .then(response => response.json())
    .then(data => setIdeas([...ideas, ...data]))
    .catch(error => console.log(error.message))
  }


  useEffect(() => {
    getIdeas();
  }, [])

  return(
    <main className='App'>
        <h1>IdeaBox</h1>
        <p>Hi!</p>
        <Form addIdea={addIdea}/>
        <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
    </main>
  )
}

export default App;
