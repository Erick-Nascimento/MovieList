import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="flex gap-8">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/movies">
        <span>Filmes</span>
      </Link>
      <Link to="/series">
        <span>Séries</span>
      </Link>
      <Link to="/favorites">
        <span>Favoritos</span>
      </Link>
    </nav>
  )
}

export default Nav
