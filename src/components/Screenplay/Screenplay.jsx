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
      <header>Screenplay</header>
      <nav>
        <Link to='/'>Try a different project</Link>
        <Link to='/screenplay/character'>Character List</Link>
        <Link to='/screenplay/new-scene'>Add Scenes</Link>
      </nav>
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
    </>
  )
}
