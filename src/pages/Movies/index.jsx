import useMovies from '../../commons/hooks/useMovies'
import { useEffect } from 'react'

function Movies() {
  const { getMovies, listMovies } = useMovies()

  useEffect(() => {
    getMovies()
  }, [])

  return <div>Movies</div>
}

export default Movies
