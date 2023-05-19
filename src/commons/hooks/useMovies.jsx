import { useState } from 'react'
import { api } from '../../services/axios'

function useMovies() {
  const [listMovies, setListMovies] = useState([])

  const getMovies = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY
    try {
      const response = await api.get(`/movie/550?${API_KEY}`)
      setListMovies(response)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return { listMovies, getMovies }
}

export default useMovies
