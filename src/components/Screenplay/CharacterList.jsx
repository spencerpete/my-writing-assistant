import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {createCharacter, getCharacters} from '../../services/apiCall'
const characterObj = {
  name: '',
  age: '',
  backstory: '',
  characterClass: 'none',
  scriptType: 'screenplay',
}
export default function CharacterList() {
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
      setCharacters(res.records);
    };
    fetchData()
  }, [])
  const filtered = characters.filter(character => character.fields.scriptType === 'screenplay')
  return (
    <div>
      <header>
        <h1>Screenplay</h1>
        <nav>
          <Link to='/screenplay'>Story Board</Link>
          <Link to='/screenplay/new-scene'>Add Scenes</Link>
        </nav>
      </header>
      <div>
        <h2>Character List</h2>
        {filtered.map(character => {
          return <div>
            {character.fields.name}
            {character.fields.age}
            {character.fields.backstory}
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
        <input type='text-area' />
        <br/>
        <button>Add/Edit</button>
      </form>
    </div>
  )
}
