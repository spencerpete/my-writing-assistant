import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import {createScene, getScenes} from '../../services/apiCall'

const coldObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'cold open',
  scriptType: 'teleplay 30',
}
const actOneObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act one',
  scriptType: 'teleplay 30',
}
const actTwoObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act two',
  scriptType: 'teleplay 30',
}
export default function NewScene30() {
  const [coldOpen, setColdOpen] = useState(coldObj)
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
  const handleChangeCold = (e) => {
    const { name, value } = e.target

    setColdOpen((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmitOne = async(e) => {
    e.preventDefault()
    await createScene(actOne)
    fetchData()
  }
  const handleSubmitTwo = async(e) => {
    e.preventDefault()
    await createScene(actTwo)
    fetchData()
  }
  const handleSubmitCold = async(e) => {
    e.preventDefault()
    await createScene(coldOpen)
    fetchData()
  }
  const fetchData = async () => {
    const res = await getScenes()
    setScenes(res.records.filter(scene => scene.fields.scriptType === 'teleplay 30'));
  };
  const [scenes, setScenes] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  console.log(scenes)
  const coldArr = scenes.filter(scene => scene.fields.act === 'cold open')
  const actOneArr = scenes.filter(scene => scene.fields.act === 'act one')
  const actTwoArr = scenes.filter(scene => scene.fields.act === 'act two')
  return (
    <div>
    <header>
      <h1>Stage Play</h1>
      <nav>
        <Link to='/teleplay/30'>Story Board</Link>
        <Link to='/teleplay/30/character'>Character List</Link>
      </nav>
      </header>
      <h2>Cold Open</h2>
    <form onChange={handleChangeCold} onSubmit={handleSubmitCold}>
      <label>Scene Name:</label>
      <input name='name' />
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
    <ul>
        {coldArr.map(scene => {
          return <li>{scene.fields.name}{scene.fields.location}</li>
        })}
    </ul>  
    <h2>Act One</h2>
    <form onChange={handleChangeOne} onSubmit={handleSubmitOne}>
      <label>Scene Name:</label>
      <input name='name' />
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
    <ul>
        {actOneArr.map(scene => {
          return <li>{scene.fields.name}{scene.fields.location}</li>
        })}
    </ul>  
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
    <ul>
        {actTwoArr.map(scene => {
          return <li>{scene.fields.name}{scene.fields.location}</li>
        })}
      </ul>  
  </div>

  )
}
