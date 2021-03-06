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
    <nav>
      <div className='flex items-center flex-shrink-0 mr-6'>
        <span className="font-semibold text-xl tracking-tight">teleplay 30 minute</span>
      </div>
      <div>
        <Link to='/'>Try Another Project</Link>  
        <Link to='/teleplay/30'>Scene Board</Link>
        <Link to='/teleplay/30/character'>Character List</Link>
      </div>
      </nav>
      <div className='grid grid-row-3 grid-flow-col'>
        <div className='m-8 sm:w-auto sm:max-w-md min-w-1/3'>
      <h2>Cold Open</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeCold} onSubmit={handleSubmitCold} className='mb-0 space-y-6'>
          <div className='mt-1'>
            <label className=''>Scene Number</label>
            <input name='name' value={coldOpen.name} required/>
          </div>
          <div className='mt-1'>
                <label>Location</label>
            <input name='location' value={coldOpen.location}required/>
          </div>
          <div className='mt-1'>
          <label>Characters</label>
            <input name='characters' value={coldOpen.characters} required/>
          </div>
          <div className='mt-1'>
          <label>Description</label>
            <textarea name='description' value={coldOpen.description} required/>
          </div>
          <div>
            <button>Add Scene</button>
          </div>
        </form>
      </div>
      <ul className='add-scene-container'>
        {coldArr.map(scene => {
          return <li key={scene.id} className='mt-1 mb-1'>{scene.fields.name}: {scene.fields.location}</li>
        })}
      </ul>
    </div>
    <div className='m-8 sm:w-auto sm:max-w-md min-w-1/3'>
      <h2>Act Two</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeOne} onSubmit={handleSubmitOne} className='mb-0 space-y-6'>
          <div className='mt-1'>
            <label className=''>Scene Number</label>
            <input name='name' value={actOne.name} required/>
          </div>
          <div className='mt-1'>
                <label>Location</label>
            <input name='location' value={actOne.location}required/>
          </div>
          <div className='mt-1'>
          <label>Characters</label>
            <input name='characters' value={actOne.characters} required/>
          </div>
          <div className='mt-1'>
          <label>Description</label>
            <textarea name='description' value={actOne.description} required/>
          </div>
          <div>
            <button>Add Scene</button>
          </div>
        </form>
      </div>
      <ul className='add-scene-container'>
        {actOneArr.map(scene => {
          return <li key={scene.id}>{scene.fields.name} {scene.fields.location}</li>
        })}
      </ul>
      </div>
      <div className='m-8  sm:w-auto sm:max-w-md'>
      <h2>Act Three</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeTwo} onSubmit={handleSubmitTwo} className='mb-0 space-y-6'>
        <div className='mt-1'>
            <label className=''>Scene Number</label>
            <input name='name' value={actTwo.name} required/>
          </div>
          <div className='mt-1'>
                <label>Location</label>
            <input name='location' value={actTwo.location}required/>
          </div>
          <div className='mt-1'>
          <label>Characters</label>
            <input name='characters' value={actTwo.characters} required/>
          </div>
          <div className='mt-1'>
          <label>Description</label>
            <textarea name='description' value={actTwo.description} required/>
          </div>
          <div>
            <button>Add Scene</button>
          </div>
        </form>
      </div>
      <ul className='add-scene-container'>
        {actTwoArr.map(scene => {
          return <li key={scene.id}>{scene.fields.name}{scene.fields.location}</li>
        })}
      </ul>
        </div>
      </div>
  </div>

  )
}
