import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import {getScenes} from '../../services/apiCall'

export default function HrTeleplay() {
  const [scenes, setScenes] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await getScenes()
      setScenes(res.records.filter(scene => scene.fields.scriptType === 'teleplay 30'));
    };
    fetchData()
  }, [])
  console.log(scenes)
  const coldArr = scenes.filter(scene => scene.fields.act === 'cold open')
  const actOneArr = scenes.filter(scene => scene.fields.act === 'act one')
  const actTwoArr = scenes.filter(scene => scene.fields.act === 'act two')
  const actThreeArr = scenes.filter(scene => scene.fields.act === 'act three')
  const actFourArr = scenes.filter(scene => scene.fields.act === 'act four')
  const actFiveArr = scenes.filter(scene => scene.fields.act === 'act five')
  return (
    <>
      <nav>
      <div className='flex items-center flex-shrink-0 mr-6'>
        <span className="font-semibold text-xl tracking-tight">teleplay 1 hour</span>
      </div>
      <div>
        <Link to='/'>Try Another Project</Link>  
        <Link to='/teleplay/hr/character'>Character List</Link>
        <Link to='/teleplay/hr/new-scene'>Add Scenes</Link>
      </div>
      </nav>
      <h2>Cold Open</h2>
      <div className='grid grid-row-4 grid-flow-col'>
        {coldArr.map(scene => {
          return <div key={scene.id} className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-2 sm:w-auto sm:max-w-md'>
            <p>{scene.fields?.name}</p>
            <p className='italic'>{scene.fields?.location}</p>
            <p>{scene.fields?.description}</p>
            <p className='text-xs'>{scene.fields?.characters}</p>
          </div>
        })}
      </div>
    <h2>Act One</h2>
      <div className='grid grid-row-4 grid-flow-col'>
        {actOneArr.map(scene => {
          return <div key={scene.id} className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-2 sm:w-auto sm:max-w-md'>
            <p>{scene.fields?.name}</p>
            <p className='italic'>{scene.fields?.location}</p>
            <p>{scene.fields?.description}</p>
            <p className='text-xs'>{scene.fields?.characters}</p>
          </div>
        })}
      </div>
      <h2>Act Two</h2>
      <div className='grid grid-row-4 grid-flow-col'>
        {actTwoArr.map(scene => {
          return <div key={scene.id} className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-2 sm:w-auto sm:max-w-md'>
            <p>{scene.fields?.name}</p>
            <p className='italic'>{scene.fields?.location}</p>
            <p>{scene.fields?.description}</p>
            <p className='text-xs'>{scene.fields?.characters}</p>
          </div>
        })}
      </div>
      <h2>Act Three</h2>
      <div className='grid grid-row-4 grid-flow-col'>
        {actThreeArr.map(scene => {
          return <div key={scene.id} className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-2 sm:w-auto sm:max-w-md'>
            <p>{scene.fields?.name}</p>
            <p className='italic'>{scene.fields?.location}</p>
            <p>{scene.fields?.description}</p>
            <p className='text-xs'>{scene.fields?.characters}</p>
          </div>
        })}
      </div>
      <h2>Act Four</h2>
      <div className='grid grid-row-4 grid-flow-col'>
        {actFourArr.map(scene => {
          return <div key={scene.id} className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-2 sm:w-auto sm:max-w-md'>
            <p>{scene.fields?.name}</p>
            <p className='italic'>{scene.fields?.location}</p>
            <p>{scene.fields?.description}</p>
            <p className='text-xs'>{scene.fields?.characters}</p>
          </div>
        })}
      </div>
      <h2>Act Five</h2>
      <div className='grid grid-row-4 grid-flow-col'>
        {actFiveArr.map(scene => {
          return <div key={scene.id} className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-2 sm:w-auto sm:max-w-md'>
            <p>{scene.fields?.name}</p>
            <p className='italic'>{scene.fields?.location}</p>
            <p>{scene.fields?.description}</p>
            <p className='text-xs'>{scene.fields?.characters}</p>
          </div>
        })}
      </div>
  </>
  )
}

