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
    fetchData()
    setActOne(actOneObj)
  }
  const handleSubmitTwo = async (e) => {
    e.preventDefault()
    await createScene(actTwo)
    fetchData()
    setActTwo(actTwoObj)
  }
  const handleSubmitThree = async (e) => {
    e.preventDefault()
    await createScene(actThree)
    fetchData()
    setActThree(actThreeObj)
  }
  const fetchData = async () => {
    const res = await getScenes()
    setScenes(res.records);
  };
  useEffect(() => {
    fetchData()
  }, [])
  const filtered = scenes.filter(scene => scene.fields.scriptType === 'screenplay')
  const actOneArr = filtered.filter(scene => scene.fields.act === 'act one')
  const actTwoArr = filtered.filter(scene => scene.fields.act === 'act two' )
  const actThreeArr = filtered.filter(scene => scene.fields.act === 'act three')
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 mt-0">
        <div className='flex items-center flex-shrink-0 mr-6'>
          <span className="font-semibold text-xl tracking-tight">Screenplay</span>
          </div>
        <div>
          <div>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8" to='/'>Try Another Project</Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8" to='/screenplay'>Story Board</Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8" to='/screenplay/character'>Character List</Link>
          </div>
        </div>
        </nav>
  <div className='grid grid-row-3 grid-flow-col'>
        <div className='m-8 sm:w-auto sm:max-w-md min-w-1/3'>
      <h2>Act One</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeOne} onSubmit={handleSubmitOne} className='mb-0 space-y-6'>
          <div className='mt-1'>
            <label className="">Scene Number</label>
                <input name='name' required value={actOne.name}/>
          </div>
          <div className='mt-1'>
            <label>Location</label>
                <input name='location' value={actOne.location} required/>
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
          return <li key={scene.id} className='mt-1 mb-1'>{scene.fields.name}: {scene.fields.location}</li>
        })}
      </ul>
    </div>
    <div className='m-8 sm:w-auto sm:max-w-md min-w-1/3'>
      <h2>Act Two</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeTwo} onSubmit={handleSubmitTwo} className='mb-0 space-y-6'>
          <div className='mt-1'>
            <label className=''>Scene Number</label>
                <input name='name' value={actTwo.name} required/>
          </div>
          <div className='mt-1'>
                <label>Location</label>
            <input name='location' value={actTwo.location} required/>
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
          return <li key={scene.id}>{scene.fields.name} {scene.fields.location}</li>
        })}
      </ul>
      </div>
      <div className='m-8  sm:w-auto sm:max-w-md'>
      <h2>Act Three</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeThree} onSubmit={handleSubmitThree} className='mb-0 space-y-6'>
          <div className='mt-1'>
            <label>Scene Number</label>
            <input name='name' value={actThree.name} required/>
          </div>
          <div className='mt-1'>
          <label>Location</label>
            <input name='location' value={actThree.location} required/>
          </div>
          <div className='mt-1'>
          <label>Characters</label>
            <input name='characters' value={actThree.characters} required/>
          </div>
          <div className='mt-1'>
          <label>Description</label>
            <textarea name='description' value={actThree.description} required/>
          </div>
          <div>
            <button>Add Scene</button>
          </div>
        </form>
      </div>
      <ul className='add-scene-container'>
        {actThreeArr.map(scene => {
          return <li key={scene.id}>{scene.fields.name}{scene.fields.location}</li>
        })}
      </ul>
        </div>
      </div>
    </div>
  )
}
