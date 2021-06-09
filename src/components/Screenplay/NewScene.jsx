import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import {createScene, getScenes} from "../../services/apiCall"
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
  const [scenes, setScenes] = useState([])
  
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
  const handleSubmitOne = async (e) => {
    e.preventDefault()
    await createScene(actOne)
  }
  const handleSubmitTwo = async (e) => {
    e.preventDefault()
    await createScene(actTwo)
  }
  const handleSubmitThree = async (e) => {
    e.preventDefault()
    await createScene(actThree)
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await getScenes()
      setScenes(res.records);
    };
    fetchData()
  }, [])
  const filtered = scenes.filter(scene => scene.fields.scriptType === 'screenplay')
  const actOneArr = filtered.filter(scene => scene.fields.act === 'act one')
  const actTwoArr = filtered.filter(scene => scene.fields.act === 'act two')
  const actThreeArr = filtered.filter(scene => scene.fields.act === 'act three')
  console.log(scenes)
  console.log('filtered', filtered)
  console.log('act one', actOneArr)
  // const filtered = scenes.filter(scene => scene.fields.scriptType === 'screenplay'
  // )
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
      <ul>
      {actThreeArr.map(scene => {
          return <li>{scene.fields.name}{scene.fields.location}</li>
        })}
      </ul>
    </div>
  )
}
