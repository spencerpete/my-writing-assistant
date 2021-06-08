import React from 'react'
import {Link} from "react-router-dom"

export default function Stageplay() {
  return (
    <>
    <header>Stage Play</header>
    <nav>
      <Link to='/'>Try a different project</Link>
      <Link to='/stageplay/character'>Character List</Link>
      <Link to='/stageplay/new-scene'>Add Scenes</Link>
    </nav>
    <h1>Act One</h1>
    <h1>Act Two</h1>
  </>
  )
}
