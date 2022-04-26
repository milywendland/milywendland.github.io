import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='nav'>
        <Link to="/">HOME</Link>
        </div>
        <div className='nav'>
        <Link to="/portfolio">PORTFOLIO</Link>
        </div>
        <div className='nav'>
        <Link to="/resume">RESUME</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header