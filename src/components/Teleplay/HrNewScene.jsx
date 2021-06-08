import React, {useState} from 'react'
import { Link } from "react-router-dom"

const coldObject = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'cold open',
  scriptType: 'teleplay hr',
}

const actOneObject = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act one',
  scriptType: 'teleplay hr',
}

const actTwoObject = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act two',
  scriptType: 'teleplay hr',
}

const actThreeObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act three',
  scriptType: 'teleplay hr',
}

const actFourObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act four',
  scriptType: 'teleplay hr',
}

const actFiveObj = {
  name: '',
  location: '',
  characters: '',
  description: '',
  act: 'act five',
  scriptType: 'teleplay hr',
}
export default function HrNewScene() {
  return (
    <div>
    <header>
      <h1>Teleplay One Hour</h1>
      <nav>
        <Link to='/teleplay/hr'>Story Board</Link>
        <Link to='/teleplay/hr/character'>Character List</Link>
      </nav>
    </header>
    <h2>Cold Open</h2>
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
