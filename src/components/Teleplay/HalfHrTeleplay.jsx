import React, {useState, useEffect}from 'react'
import { Link } from "react-router-dom"
import {getScenes} from '../../services/apiCall'
export default function HalfHrTeleplay() {
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
  return (
    <>
      <header>
        <h1>Teleplay 30 Minute</h1>
    <nav>
      <Link to='/'>Try a different project</Link>
      <Link to='/teleplay/30/character'>Character List</Link>
      <Link to='/teleplay/30/new-scene'>Add Scenes</Link>
      </nav>
      </header>
    <h2>Cold Open</h2>
    <div>
      {coldArr.map(scene => {
        return <div key={scene.id}>
          {scene.fields?.name}
          {scene.fields?.location}
          {scene.fields?.characters}
          {scene.fields?.description}
        </div>
        })}
      </div>
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
