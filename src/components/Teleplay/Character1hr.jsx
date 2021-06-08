import React, {useState}from 'react'
import { Link } from "react-router-dom"
import {createCharacter} from '../../services/apiCall'
const characterObj = {
  name: '',
  age: '',
  backstory: '',
  characterClass: 'none',
  scriptType: 'teleplay 30',
}
export default function Character1hr() {
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
      <h1>Teleplay 30 Minute</h1>
      <nav>
        <Link to='/teleplay/hr'>Story Board</Link>
        <Link to='/teleplay/hr/new-scene'>Add Scenes</Link>
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
      <input />
      <br />
      <label>Character Class:</label>
      <select>
        <option value="Main Cast">Main cast</option>
        <option value='Recurring'>Recurring</option>
        <option value="Guest Star">Guest Star</option>
      </select>
      <br/>
      <button>Add/Edit</button>
    </form>
  </div>
  )
}
