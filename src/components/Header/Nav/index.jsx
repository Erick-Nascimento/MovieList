import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="flex gap-8">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/favorites">
        <span>Favoritos</span>
      </Link>
      <Link to="/verdepois">
        <span>Ver Depois</span>
      </Link>
    </nav>
  )
}

export default Nav
