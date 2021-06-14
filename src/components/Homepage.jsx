import { Link } from 'react-router-dom'
export default function Homepage() {
  return (
    <div>
      <nav>
        <div className='flex items-center flex-shrink-0 mr-6'>
          <span className="font-semibold text-xl tracking-tight">melies</span>
        </div>
        <div>
          <Link to="/screenplay">
          I am writing a Screenplay
          </Link>
          <Link to='/stageplay'>
            I am writing a Stage Play
          </Link>
        <div className="dropdown inline-block relative">    
            <button className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8 bg-teal-500 font-normal border-none focus:outline-none focus:ring-0'>I am writing a Teleplay<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg></button>
            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
              <li className=""><Link className="rounded-t bg-teal-500 py-2 px-4 block whitespace-no-wrap" to='/teleplay/30'>30 Minute</Link></li>
              <li className=""><Link className="bg-teal-500 py-2 px-4 block whitespace-no-wrap" to='/teleplay/hr'>Hour Long</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <h1 className='text-xl'>Welcome to Melies</h1>
        <p>Melies is your go to site for story outlining. Pick your script type and get started!</p>
      </div>
    </div>
  )
}
