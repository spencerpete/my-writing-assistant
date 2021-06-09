import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import {createCharacter, getCharacters} from '../../services/apiCall'
const characterObj = {
  name: '',
  age: '',
  backstory: '',
  characterClass: 'none',
  scriptType: 'teleplay 30',
}
export default function Character30() {
  const [input, setInput] = useState(characterObj)
  const [characters, setCharacters] = useState([])
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
  useEffect(() => {
    const fetchData = async () => {
      const res = await getCharacters()
      setCharacters(res.records.filter(character => character.fields.scriptType === 'teleplay 30'));
    };
    fetchData()
  }, [])
  return (
    <div>
    <header>
      <h1>Teleplay 30 Minute</h1>
      <nav>
        <Link to='/teleplay/30'>Story Board</Link>
        <Link to='/teleplay/30/new-scene'>Add Scenes</Link>
      </nav>
    </header>
    <div>
        <h2>Character List</h2>
        {characters.map(character => {
          return <div>
            {character.fields?.name}
            {character.fields?.age}
            {character.fields?.backstory}
          </div>
        })}
      </div> 
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
