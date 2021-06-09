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
    <header>Teleplay Hour Long</header>
    <nav>
      <Link to='/'>Try a different project</Link>
      <Link to='/teleplay/hr/character'>Character List</Link>
      <Link to='/teleplay/hr/new-scene'>Add Scenes</Link>
    </nav>
    <h1>Cold Open</h1>
    <div>
      {coldArr.map(scene => {
        return <div>
          {scene.fields?.name}
          {scene.fields?.location}
          {scene.fields?.characters}
          {scene.fields?.description}
        </div>
        })}
    </div>
    <h1>Act One</h1>
    <div>
      {actOneArr.map(scene => {
        return <div>
          {scene.fields?.name}
          {scene.fields?.location}
          {scene.fields?.characters}
          {scene.fields?.description}
        </div>
        })}
    </div>
    <h1>Act Two</h1>
    <div>
      {actTwoArr.map(scene => {
        return <div>
          {scene.fields?.name}
          {scene.fields?.location}
          {scene.fields?.characters}
          {scene.fields?.description}
        </div>
        })}
    </div>
    <h1>Act Three</h1>
    <div>
      {actThreeArr.map(scene => {
        return <div>
          {scene.fields?.name}
          {scene.fields?.location}
          {scene.fields?.characters}
          {scene.fields?.description}
        </div>
        })}
    </div>
    <h1>Act Four</h1>
    <div>
      {actFourArr.map(scene => {
        return <div>
          {scene.fields?.name}
          {scene.fields?.location}
          {scene.fields?.characters}
          {scene.fields?.description}
        </div>
        })}
    </div>
    <h1>Act Five</h1>
    <div>
      {actFiveArr.map(scene => {
        return <div>
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

