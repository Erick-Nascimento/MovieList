import { useState } from 'react'
import { api } from '../../services/axios'
import { fetchMovies } from '../../services/movies'

function useMovies() {
  const [listMovies, setListMovies] = useState([])

  const getMovies = async (genre) => {
    try {
      const result = await fetchMovies(genre)
      setListMovies(result)
    } catch (error) {
      console.log(error)
    }
  }

  return { listMovies, getMovies }
}

export default useMovies
