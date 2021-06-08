import React, {useState} from 'react'
import { Link } from "react-router-dom"
import {createScene} from '../../services/apiCall'
const actOneObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act one',
  scriptType: 'stage play',
}
const actTwoObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act two',
  scriptType: 'stage play',
}
export default function STGNewScene() {
  const [actOne, setActOne] = useState(actOneObj)
  const [actTwo, setActTwo] = useState(actTwoObj)
  const handleChangeOne = (e) => {
    const { name, value } = e.target

    setActOne((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleChangeTwo = (e) => {
    const { name, value } = e.target
    setActTwo((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmitOne = async (e) => {
    e.preventDefault
    const res = await createScene(actOne) 
  }
  const handleSubmitTwo = async (e) => {
    e.preventDefault
    const res = await createScene(actTwo) 
  }
  return (
    <div>
      <header>
        <h1>Stage Play</h1>
        <nav>
          <Link to='/stageplay'>Story Board</Link>
          <Link to='/stageplay/character'>Character List</Link>
        </nav>
      </header>
      <h2>Act One</h2>
      <form onChange={handleChangeOne} onSubmit={handleSubmitOne}>
        <label>Scene Name:</label>
        <input name='name'/>
        <br />
        <label>Location:</label>
        <input name='location'/>
        <br/>
        <label>Character(s):</label>
        <input name='characters'/>
        <br/>
        <label>Description:</label>
        <input name='description'/>
        <br/>
        <button>Add Scene</button>
      </form>
      <h2>Act Two</h2>
      <form onChange={handleChangeTwo} onSubmit={handleSubmitTwo}>
        <label>Scene Name:</label>
        <input name='name'/>
        <br />
        <label>Location :</label>
        <input name='location'/>
        <br/>
        <label>Character(s):</label>
        <input name='characters'/>
        <br/>
        <label>Description:</label>
        <input name='description'/>
        <br/>
        <button>Add Scene</button>
      </form>
    </div>
  )
}
