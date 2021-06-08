import React from 'react'
import {Link} from "react-router-dom"
export default function HalfHrTeleplay() {
  return (
    <>
    <header>Teleplay 30 Minute</header>
    <nav>
      <Link to='/'>Try a different project</Link>
      <Link to='/teleplay/30/character'>Character List</Link>
      <Link to='/teleplay/30/new-scene'>Add Scenes</Link>
    </nav>
    <h1>Cold Open</h1>
    <h1>Act One</h1>
    <h1>Act Two</h1>
  </>
  )
}
