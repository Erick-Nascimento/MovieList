import { useState } from 'react'
import { getTrailer } from '../../services/movies'

function useTrailer() {
  const [trailer, setTrailer] = useState()

  const getTrailers = async (movieId) => {
    try {
      const result = await getTrailer(movieId)
      setTrailer(result)
    } catch (error) {
      console.log(error)
    }
    return trailer
  }
  return { trailer, getTrailers }
}

export default useTrailer
