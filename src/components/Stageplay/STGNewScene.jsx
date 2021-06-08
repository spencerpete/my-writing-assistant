import React from 'react'
import { Link } from "react-router-dom"

const actOneObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act one',
  scriptType: 'stage play',
}
const actTwoObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act two',
  scriptType: 'stage play',
}
const actThreeObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act three',
  scriptType: 'stage play',
}
export default function STGNewScene() {
  return (
    <div>
      <header>
        <h1>Stage Play</h1>
        <nav>
          <Link to='/stageplay'>Story Board</Link>
          <Link to='/stageplay/character'>Character List</Link>
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
