import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import {createScene, getScenes} from '../../services/apiCall'
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
    setActTwo((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmitOne = async (e) => {
    e.preventDefault()
    const res = await createScene(actOne) 
  }
  const handleSubmitTwo = async (e) => {
    e.preventDefault()
    const res = await createScene(actTwo)
    fetchData()
  }
  const fetchData = async () => {
    const res = await getScenes()
    setScenes(res.records.filter(scene => scene.fields.scriptType === 'stage play'));
  };
  useEffect(() => {
    fetchData()
  }, [])
  console.log(scenes)
  const actOneArr = scenes.filter(scene => scene.fields.act === 'act one')
  const actTwoArr = scenes.filter(scene => scene.fields.act === 'act two')
  return (
    <div>
      <header>
        <h1>Stage Play</h1>
        <nav>
          <Link to='/'>Try Another Project</Link>
          <Link to='/stageplay'>Story Board</Link>
          <Link to='/stageplay/character'>Character List</Link>
        </nav>
      </header>
      <div className='grid grid-row-2 grid-flow-col'>
        <div className='m-8 sm:w-auto sm:max-w-md min-w-1/3'>
      <h2>Act One</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeOne} onSubmit={handleSubmitOne} className='mb-0 space-y-6'>
          <div className='mt-1'>
            <label className="">Scene Name</label>
            <input name='name' required/>
          </div>
          <div className='mt-1'>
            <label>Location</label>
            <input name='location' required/>
          </div>
          <div className='mt-1'>
            <label>Characters</label>
            <input name='characters' required/>
          </div>
          <div className='mt-1'>
            <label>Description</label>
            <textarea name='description' required/>
          </div>
          <div>
            <button>Add Scene</button>
          </div>
        </form>
      </div>
      <ul className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        {actOneArr.map(scene => {
          return <li className='mt-1 mb-1'>{scene.fields.name}: {scene.fields.location}</li>
        })}
      </ul>
    </div>
    <div className='m-8 sm:w-auto sm:max-w-md min-w-1/3'>
      <h2>Act Two</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeTwo} onSubmit={handleSubmitTwo} className='mb-0 space-y-6'>
          <div className='mt-1'>
            <label className=''>Scene Name</label>
            <input name='name' required/>
          </div>
          <div className='mt-1'>
                <label>Location</label>
            <input name='location' required/>
          </div>
          <div className='mt-1'>
          <label>Characters</label>
            <input name='characters' required/>
          </div>
          <div className='mt-1'>
          <label>Description</label>
            <textarea name='description' required/>
          </div>
          <div>
            <button>Add Scene</button>
          </div>
        </form>
      </div>
      <ul className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        {actTwoArr.map(scene => {
          return <li>{scene.fields.name} {scene.fields.location}</li>
        })}
      </ul>
      </div>
      </div>
    </div>
  )
}
