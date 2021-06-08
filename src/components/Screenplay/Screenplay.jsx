import React from 'react'
import { Link, Route } from 'react-router-dom'
import CharacterList from './CharacterList'
export default function Screenplay() {
  return (
    <>
      <header>Screenplay</header>
      <nav>
        <Link to='/'>Try a different project</Link>
        <Link to='/screenplay/character'>Character List</Link>
        <Link to='/screenplay/new-scene'>Add Scenes</Link>
      </nav>
      <h1>Act One</h1>
      <h1>Act Two</h1>
      <h1>Act Three</h1>
    </>
  )
}
