import { useState } from 'react'
import { getTheRelatedMovies } from '../../services/movies'

function useRelatedMovies() {
  const [relatedMovies, setRelatedMovies] = useState([])

  const getRelatedMovies = async (movieId) => {
    try {
      const result = await getTheRelatedMovies(movieId)
      setRelatedMovies(result.results)
      if (result.results.length === 0) {
        getRelatedMovies(2)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return { relatedMovies, getRelatedMovies }
}

export default useRelatedMovies
