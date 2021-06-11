import {Link } from 'react-router-dom'
import {useState} from "react"
export default function Homepage() {
  const [clicked, setClicked] = useState(false)
  const handleTeleplay = () => {
    return (
      <nav className=''>
        <Link to='/teleplay/30'>
          30 min
      </Link>
        <Link to='/teleplay/hr'>
          Hour long
        </Link>
      </nav>
    )
  }
  return (
    <div>
      <header>
      <nav>
      <Link to="/screenplay">
        I want to write a Screenplay
      </Link>
      <Link to='/stageplay'>
        I am writing a Stage Play
      </Link>
      <button className="border-2 rounded p-3 m-10" onClick={() => { setClicked(prev => !prev) }}>I am writing a teleplay</button>
          {clicked ? handleTeleplay() : null}
        </nav> 
      </header>
    </div>
  )
}
