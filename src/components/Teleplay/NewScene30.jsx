import React, {useState} from 'react'
import { Link } from "react-router-dom"

const coldObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'cold open',
  scriptType: 'teleplay 30',
}
const actOneObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act one',
  scriptType: 'teleplay 30',
}
const actTwoObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act two',
  scriptType: 'teleplay 30',
}
export default function NewScene30() {
  return (
    <div>
    <header>
      <h1>Stage Play</h1>
      <nav>
        <Link to='/teleplay/30'>Story Board</Link>
        <Link to='/teleplay/30/character'>Character List</Link>
      </nav>
    </header>
    <h2>Act One</h2>
    <form>
      <label>Scene Name:</label>
      <input />
      <br />
      <label>Location:</label>
      <input />
      <br/>
      <label>Character(s):</label>
      <input />
      <br/>
      <label>Description:</label>
      <input />
      <br/>
      <button>Add Scene</button>
    </form>
    <h2>Act Two</h2>
    <form>
      <label>Scene Name:</label>
      <input />
      <br />
      <label>Location :</label>
      <input />
      <br/>
      <label>Character(s):</label>
      <input />
      <br/>
      <label>Description:</label>
      <input />
      <br/>
      <button>Add Scene</button>
    </form>
  </div>

  )
}
