import { useState } from 'react'
import { getTheUpcomingMovies } from '../../services/movies'

function UseUpcomingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([])

  const getUpcomingMovies = async () => {
    try {
      const result = await getTheUpcomingMovies()
      setUpcomingMovies(result.results)
    } catch (error) {
      console.log(error)
    }
  }
  return { upcomingMovies, getUpcomingMovies }
}

export default UseUpcomingMovies
