import React, {useState, useEffect}from 'react'
import {Link} from "react-router-dom"
import {getScenes} from '../../services/apiCall'
export default function Stageplay() {
  const [scenes, setScenes] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await getScenes()
      setScenes(res.records.filter(scene => scene.fields.scriptType === 'stage play'));
    };
    fetchData()
  }, [])
  console.log(scenes)
  const actOneArr = scenes.filter(scene => scene.fields.act === 'act one')
  const actTwoArr = scenes.filter(scene => scene.fields.act === 'act two')
  return (
    <>
        <nav>
          <div className='flex items-center flex-shrink-0 mr-6'>
            <span className="font-semibold text-xl tracking-tight">Stage Play</span>
          </div>
          <div>
          <Link to='/'>Try a different project</Link>
          <Link to='/stageplay/character'>Character List</Link>
          <Link to='/stageplay/new-scene'>Add Scenes</Link>
          </div>
        </nav>
      <h2>Act One</h2>
      <div>
        {actOneArr.map(scene => {
          return <div key={scene.id}>
            {scene.fields?.name}
            {scene.fields?.location}
            {scene.fields?.characters}
            {scene.fields?.description}
          </div>
        })}
      </div>
      <h2>Act Two</h2>
      <div>
        {actTwoArr.map(scene => {
          return <div key={scene.id}>
            {scene.fields?.name}
            {scene.fields?.location}
            {scene.fields?.characters}
            {scene.fields?.description}
          </div>
        })}
      </div>
  </>
  )
}
