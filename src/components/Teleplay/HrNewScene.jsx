import React, {useState} from 'react'
import { Link } from "react-router-dom"
import {createScene} from '../../services/apiCall'

const coldObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'cold open',
  scriptType: 'teleplay hr',
}

const actOneObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act one',
  scriptType: 'teleplay hr',
}

const actTwoObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act two',
  scriptType: 'teleplay hr',
}

const actThreeObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act three',
  scriptType: 'teleplay hr',
}

const actFourObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act four',
  scriptType: 'teleplay hr',
}

const actFiveObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act five',
  scriptType: 'teleplay hr',
}
export default function HrNewScene() {
  const [coldOpen, setColdOpen] = useState(coldObj)
  const [actOne, setActOne] = useState(actOneObj)
  const [actTwo, setActTwo] = useState(actTwoObj)
  const [actThree, setActThree] = useState(actThreeObj)
  const [actFour, setActFour] = useState(actFourObj)
  const [actFive, setActFive] = useState(actFiveObj)
  const handleChangeCold = (e) => {
    const { name, value } = e.target

    setColdOpen((prev) => ({
      ...prev,
      [name]: value
    }))
  }
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
  const handleChangeThree = (e) => {
    const { name, value } = e.target
    
    setActThree((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleChangeFour = (e) => {
    const { name, value } = e.target
    
    setActFour((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleChangeFive = (e) => {
    const { name, value } = e.target

    setActFive((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmitCold = async(e) => {
    e.preventDefault()
    await createScene(coldOpen)
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
  const handleSubmitFour = async(e) => {
    e.preventDefault()
    await createScene(actFour)
  }
  const handleSubmitFive = async(e) => {
    e.preventDefault()
    await createScene(actFive)
  }
  return (
    <div>
    <header>
      <h1>Teleplay One Hour</h1>
      <nav>
        <Link to='/teleplay/hr'>Story Board</Link>
        <Link to='/teleplay/hr/character'>Character List</Link>
      </nav>
    </header>
    <h2>Cold Open</h2>
    <form onChange={handleChangeCold} onSubmit={handleSubmitCold}>
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
      <form onChange={handleChangeTwo} onSubmit={handleSubmitThree}>
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
    <h2>Act Four</h2>
    <form onChange={handleChangeFour} onSubmit={handleSubmitFour}>
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
    <h2>Act Five</h2>
    <form onChange={handleChangeFive} onSubmit={handleSubmitFive}>
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
