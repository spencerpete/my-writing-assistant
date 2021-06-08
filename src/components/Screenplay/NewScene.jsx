import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {createScene} from "../../services/apiCall"
const actOneObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act one',
  scriptType: 'screenplay',
}
const actTwoObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act two',
  scriptType: 'screenplay',
}
const actThreeObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act three',
  scriptType: 'screenplay',
}
export default function NewScene() {
  const [actOne, setActOne] = useState(actOneObj)
  const [actTwo, setActTwo] = useState(actTwoObj)
  const [actThree, setActThree] = useState(actThreeObj)
  
  const handleChangeOne = (e) => {
    const { name, value } = e.target
    
    setActOne((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleChangeTwo = (e) => {
    const { name, value } = e.target
    
    setActTwo((prevActTwo) => ({
      ...prevActTwo,
      [name]: value
    }))
  }
  const handleChangeThree = (e) => {
    const { name, value } = e.target

    setActThree((prevActThree) => ({
      ...prevActThree,
      [name]: value
    }))
  }
  const handleSubmitOne = async(e) => {
    e.preventDefault()
    await createScene(actOne)
    console.log(actOneObj)
  }
  const handleSubmitTwo = async(e) => {
    e.preventDefault()
    await createScene(actTwo)
  }
  const handleSubmitThree = async(e) => {
    e.preventDefault()
    await createScene(actThree)
  }
  return (
    <div>
      <header>
        <h1>Screenplay</h1>
        <nav>
          <Link to='/screenplay'>Story Board</Link>
          <Link to='/screenplay/character'>Character List</Link>
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
      <h2>Act Three</h2>
      <form onChange={handleChangeThree} onSubmit={handleSubmitThree}>
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
    </div>
  )
}
