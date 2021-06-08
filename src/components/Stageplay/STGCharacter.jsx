import React, {useState} from 'react'
import { Link } from "react-router-dom"
import {createCharacter} from '../../services/apiCall'
const characterObj = {
  name: '',
  age: '',
  backstory: '',
  characterClass: 'none',
  scriptType: 'stage play',
}
export default function STGCharacter() {
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
        <h1>Stage Play</h1>
        <nav>
          <Link to='/stageplay'>Story Board</Link>
          <Link to='/stageplay/new-scene'>Add Scenes</Link>
        </nav>
      </header>
      <ul>Character List</ul> 
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <h3>Character Details</h3>
        <label>Name: </label>
        <input name='name'/>
        <br/>
        <label>Age: </label>
        <input name='age'/>
        <br/>
        <label>Backstory: </label>
        <input name='backstory'/>
        <br/>
        <button>Add/Edit</button>
      </form>
    </div>
  )
}
