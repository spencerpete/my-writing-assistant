import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getScenes } from '../../services/apiCall'
export default function Screenplay() {
  const [scenes, setScenes] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await getScenes()
      setScenes(res.records.filter(scene => scene.fields.scriptType === 'screenplay'));
    };
    fetchData()
  }, [])
  
  const actOneArr = scenes.filter(scene => scene.fields.act === 'act one').sort((a, b) => a.fields.name - b.fields.name)
  // const sorted= actOneArr.sort((a, b) => a.fields.name - b.fields.name)
  // console.log(actOneArr)
  // console.log(sorted)
  const actTwoArr = scenes.filter(scene => scene.fields.act === 'act two')
  const actThreeArr = scenes.filter(scene => scene.fields.act === 'act three')
  return (
    <>
      <nav>
        <div className='flex items-center flex-shrink-0 mr-6'>
          <span className="font-semibold text-xl tracking-tight">Screenplay</span>
          </div>
        <div>
        <Link to='/'>Try a different project</Link>
        <Link to='/screenplay/character'>Character List</Link>
        <Link to='/screenplay/new-scene'>Add Scenes</Link>
        </div>
        </nav>
      <h2>Act One</h2>
      <div className='grid grid-cols-4 grid-flow-row'>
        {actOneArr.map(scene => {
          return  <div key={scene.id} className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-2 sm:w-auto max-w-xs'>
            {/* <p>{scene.fields?.name}</p> */}
            <p className='italic'>{scene.fields?.location}</p>
            <p>{scene.fields?.description}</p>
            <p className='text-xs'>{scene.fields?.characters}</p>
          </div>
        })}
      </div>
      <h2>Act Two</h2>
      <div className='grid grid-row-4 grid-flow-col'>
        {actTwoArr.map(scene => {
          return <div key={scene.id} className='bg-white py-8 px-6 shadow rounded-lg sm:px-10 m-2 sm:w-auto max-w-xs'>
            <p>{scene.fields?.name}</p>
            <p className='italic'>{scene.fields?.location}</p>
            <p>{scene.fields?.description}</p>
            <p className='text-xs'>{scene.fields?.characters}</p>
          </div>
        })}
      </div>
      <h2>Act Three</h2>
      <div  className='grid grid-row-4 grid-flow-col'>
        {actThreeArr.map(scene => {
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
