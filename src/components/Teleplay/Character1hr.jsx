import React, {useState, useEffect}from 'react'
import { Link } from "react-router-dom"
import {createCharacter, getCharacters} from '../../services/apiCall'
const characterObj = {
  name: '',
  age: '',
  backstory: '',
  characterClass: 'none',
  scriptType: 'teleplay hr',
}
export default function Character1hr() {
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
    await createCharacter(input)
    fetchData()
  }
  const fetchData = async () => {
    const res = await getCharacters()
    setCharacters(res.records.filter(character => character.fields.scriptType === 'teleplay hr'));
  };
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <nav>
      <div className='flex items-center flex-shrink-0 mr-6'>
        <span className="font-semibold text-xl tracking-tight">Teleplay 1 Hour</span>
      </div>
      <div>
        <Link to='/'>Try Another Project</Link>  
        <Link to='/teleplay/hr'>Scene Board</Link>
        <Link to='/teleplay/hr/new-scene'>Add Scenes</Link>
      </div>
      </nav>
      <div className='grid grid-row-2 grid-flow-col'>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-8 sm:w-auto sm:max-w-md'>
        <h2>Character List</h2>
        {characters.map(character => {
          return <div key={character.id}>
            {character.fields?.name}
            {character.fields?.age}
            {character.fields?.backstory}
          </div>
        })}
      </div>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-8 sm:w-auto sm:max-w-md '> 
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <h3>Character Details</h3>
          <label>Name: </label>
          <input name='name' required/> 
        <label>Age: </label>
        <input name='age' required/>
        <label>Backstory: </label>
        <textarea name='backstory' required/>
        <button>Add/Edit</button>
        </form>
        </div>
      </div>
  </div>
  )
}
