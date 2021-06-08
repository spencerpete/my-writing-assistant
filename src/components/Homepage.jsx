import {Link } from 'react-router-dom'
import {useState} from "react"
export default function Homepage() {
  const [clicked, setClicked] = useState(false)
  const handleTeleplay = () => {
    return (
      <div>
        <Link to='/teleplay/30'>
          30 min
      </Link>
        <Link to='/teleplay/hr'>
          Hour long
        </Link>
      </div>
    )
  }
  return (
    <div>
      <Link to="/screenplay">
        I want to write a Screenplay
      </Link>
      <Link to='/stageplay'>
        I am writing a Stage Play
      </Link>
      <button onClick={() => { setClicked(prev => !prev) }}>I am writing a teleplay</button>
      {clicked? handleTeleplay(): null}
    </div>
  )
}
