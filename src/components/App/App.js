import { useState } from 'react'; 
import Ideas from '../Ideas/Ideas';
import Form from '../Form/Form'
import './App.css';

function App()  {
  const dummyIdeas = [
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
  ]
  const [ideas, setIdeas] = useState(dummyIdeas);
  
  function addIdea (newIdea) {
    setIdeas([...ideas, newIdea])
  }

  return (
    <main className='App'>
    <h1>IdeaBox</h1>
    {!ideas.length && <h2>No ideas yet -- add some!</h2> }
    <Form addIdea={addIdea} />
    <Ideas ideas={ideas} />
  </main>
  )
  
}



export default App;