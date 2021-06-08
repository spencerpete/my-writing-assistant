import React, {useState} from 'react'
import {Link} from "react-router-dom"
export default function HrTeleplay() {
  return (
    <>
    <header>Teleplay Hour Long</header>
    <nav>
      <Link to='/'>Try a different project</Link>
      <Link to='/teleplay/hr/character'>Character List</Link>
      <Link to='/teleplay/hr/new-scene'>Add Scenes</Link>
    </nav>
    <h1>Cold Open</h1>
    <h1>Act One</h1>
    <h1>Act Two</h1>
    <h1>Act Three</h1>
    <h1>Act Four</h1>
    <h1>Act Five</h1>
  </>
  )
}

