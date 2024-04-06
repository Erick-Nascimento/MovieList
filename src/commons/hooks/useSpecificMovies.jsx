import { useState } from 'react'
import { api } from '../../services/axios'
import { getaSpecificMovie } from '../../services/movies'

function useSpecificMovies() {
  const [loading, setLoading] = useState(true)
  const [movie, setMovie] = useState({})

  const getSpecificMovie = async (movieId) => {
    try {
      const result = await getaSpecificMovie(movieId)
      setMovie(result)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
    return movie
  }
  return { movie, getSpecificMovie, loading, setLoading }
}

export default useSpecificMovies
