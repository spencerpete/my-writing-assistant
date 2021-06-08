import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {createCharacter} from '../../services/apiCall'
const characterObj = {
  name: '',
  age: '',
  backstory: '',
  characterClass: 'none',
  scriptType: 'screenplay',
}
export default function CharacterList() {
  const [input, setInput] = useState(characterObj)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createCharacter(input)
  }
  return (
    <div>
      <header>
        <h1>Screenplay</h1>
        <nav>
          <Link to='/screenplay'>Story Board</Link>
          <Link to='/screenplay/new-scene'>Add Scenes</Link>
        </nav>
      </header>
      <ul>Character List</ul> 
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <h3>Character Details</h3>
        <label>Name: </label>
        <input />
        <br/>
        <label>Age: </label>
        <input />
        <br/>
        <label>Backstory: </label>
        <input type='text-area' />
        <br/>
        <button>Add/Edit</button>
      </form>
    </div>
  )
}
