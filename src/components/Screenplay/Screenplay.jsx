import React, {useState, useEffect} from 'react'
import { Link, Route } from 'react-router-dom'
import CharacterList from './CharacterList'
import {getScenes} from '../../services/apiCall'
export default function Screenplay() {
  const [scenes, setScenes] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await getScenes()
      setScenes(res.records.filter(scene => scene.fields.scriptType === 'screenplay'));
    };
    fetchData()
  }, [])
  console.log(scenes)
  const actOneArr = scenes.filter(scene => scene.fields.act === 'act one')
  const actTwoArr = scenes.filter(scene => scene.fields.act === 'act two')
  const actThreeArr = scenes.filter(scene => scene.fields.act === 'act three')
  return (
    <>
      <header>
        <h1>Screenplay</h1>
        <nav>
        <Link to='/'>Try a different project</Link>
        <Link to='/screenplay/character'>Character List</Link>
        <Link to='/screenplay/new-scene'>Add Scenes</Link>
        </nav>
      </header>
      <h2>Act One</h2>
      <div className='grid grid-row-4 grid-flow-col'>
        {actOneArr.map(scene => {
          return <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-2 sm:w-auto sm:max-w-md'>
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
          return <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-2 sm:w-auto sm:max-w-md'>
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
          return <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-2 sm:w-auto sm:max-w-md'>
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
