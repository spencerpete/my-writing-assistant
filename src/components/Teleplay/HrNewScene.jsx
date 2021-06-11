import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import {createScene, getScenes} from '../../services/apiCall'

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
    fetchData()
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
  const handleSubmitThree = async(e) => {
    e.preventDefault()
    await createScene(actThree)
    fetchData()
  }
  const handleSubmitFour = async(e) => {
    e.preventDefault()
    await createScene(actFour)
    fetchData()
  }
  const handleSubmitFive = async(e) => {
    e.preventDefault()
    await createScene(actFive)
    fetchData()
  }

  const [scenes, setScenes] = useState([])
  const fetchData = async () => {
    const res = await getScenes()
    setScenes(res.records.filter(scene => scene.fields.scriptType === 'teleplay hr'));
  };
  useEffect(() => {
    fetchData()
  }, [])
  const coldArr = scenes.filter(scene => scene.fields.act === 'cold open')
  const actOneArr = scenes.filter(scene => scene.fields.act === 'act one')
  const actTwoArr = scenes.filter(scene => scene.fields.act === 'act two')
  const actThreeArr = scenes.filter(scene => scene.fields.act === 'act three')
  const actFourArr = scenes.filter(scene => scene.fields.act === 'act four')
  const actFiveArr = scenes.filter(scene => scene.fields.act === 'act five')
  return (
    <div>
    <header>
      <h1>Teleplay One Hour</h1>
        <nav>
          <Link to='/'>Try Another Project</Link>
        <Link to='/teleplay/hr'>Story Board</Link>
        <Link to='/teleplay/hr/character'>Character List</Link>
      </nav>
    </header>
    <div className='grid grid-row-3 grid-flow-col'>
        <div className='m-8 sm:w-auto sm:max-w-md min-w-1/3'>
      <h2>Cold Open</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeCold} onSubmit={handleSubmitCold} className='mb-0 space-y-6'>
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
        {coldArr.map(scene => {
          return <li className='mt-1 mb-1'>{scene.fields.name}: {scene.fields.location}</li>
        })}
      </ul>
    </div>
    <div className='m-8 sm:w-auto sm:max-w-md min-w-1/3'>
      <h2>Act Two</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeOne} onSubmit={handleSubmitOne} className='mb-0 space-y-6'>
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
        {actOneArr.map(scene => {
          return <li>{scene.fields.name} {scene.fields.location}</li>
        })}
      </ul>
      </div>
      <div className='m-8  sm:w-auto sm:max-w-md'>
      <h2>Act Three</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeTwo} onSubmit={handleSubmitTwo} className='mb-0 space-y-6'>
          <div className='mt-1'>
            <label>Scene Name</label>
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
          return <li>{scene.fields.name}{scene.fields.location}</li>
        })}
      </ul>
        </div>
      </div>
      <div className='grid grid-row-3 grid-flow-col'>
        <div className='m-8 sm:w-auto sm:max-w-md min-w-1/3'>
      <h2>Act Three</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeThree} onSubmit={handleSubmitThree} className='mb-0 space-y-6'>
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
        {actThreeArr.map(scene => {
          return <li className='mt-1 mb-1'>{scene.fields.name}: {scene.fields.location}</li>
        })}
      </ul>
    </div>
    <div className='m-8 sm:w-auto sm:max-w-md min-w-1/3'>
      <h2>Act Four</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeFour} onSubmit={handleSubmitFour} className='mb-0 space-y-6'>
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
        {actFourArr.map(scene => {
          return <li>{scene.fields.name} {scene.fields.location}</li>
        })}
      </ul>
      </div>
      <div className='m-8  sm:w-auto sm:max-w-md'>
      <h2>Act Five</h2>
      <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
        <form onChange={handleChangeFive} onSubmit={handleSubmitFive} className='mb-0 space-y-6'>
          <div className='mt-1'>
            <label>Scene Name</label>
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
        {actFiveArr.map(scene => {
          return <li>{scene.fields.name}{scene.fields.location}</li>
        })}
      </ul>
        </div>
      </div>
  </div>
  )
}
