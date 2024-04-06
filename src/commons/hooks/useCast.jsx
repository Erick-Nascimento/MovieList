import { useState } from 'react'
import { getActors } from '../../services/movies'

function useCast(movieId) {
  const [cast, setCast] = useState([])

  const getCast = async (movieId) => {
    try {
      const result = await getActors(movieId)
      setCast(result.cast)
    } catch (error) {
      console.log(error)
    }
  }

  return { cast, getCast }
}

export default useCast
