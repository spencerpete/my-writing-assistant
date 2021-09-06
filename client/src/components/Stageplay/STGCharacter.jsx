import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import {createCharacter, getCharacters} from '../../services/apiCall'
const characterObj = {
  name: '',
  age: '',
  backstory: '',
  characterClass: 'none',
  scriptType: 'stage play',
}
export default function STGCharacter() {
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
    setCharacters(res.records.filter(character => character.fields.scriptType === 'stage play'));
  };
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <nav>
        <div className='flex items-center flex-shrink-0 mr-6'>
        <span className="font-semibold text-xl tracking-tight">stage play</span>
        </div>
        <div>
          <Link to='/'>Try a different project</Link>
          <Link to='/stageplay'>Scene Board</Link>
          <Link to='/stageplay/new-scene'>Add Scenes</Link>
        </div>
      </nav>
      <div className='grid grid-row-2 grid-flow-col'>
        <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-8 sm:w-auto sm:max-w-md overflow-auto'>
          <h2>Character List</h2>
          {characters.map(character => {
            return <div key={character.id} >
              <div className='bg-white  px-6 shadow rounded-lg sm:px-10 m-2 sm:w-auto sm:max-w-md grid grid-rows-1 grid-flow-col'>
                <div>
                  <p>{character.fields?.name} {character.fields?.age}</p>
                  <p>{character.fields?.backstory}</p>
                </div>
            </div>    
          </div>
        })}
      </div>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-8 sm:w-auto sm:max-w-md'> 
          <form onChange={handleChange} onSubmit={handleSubmit}>
          <h3>Character Details</h3>
          <label>Name: </label>
          <input name='name' value={input.name} required/> 
        <label>Age: </label>
        <input name='age' value={input.age} required/>
        <label>Backstory: </label>
            <textarea name='backstory' value={input.backstory}required/>
            <button className='mr-8' >Add</button>
        </form>
        </div>
      </div>
    </div>
  )
}
