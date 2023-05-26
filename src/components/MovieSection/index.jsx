import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'

import movieImage from '../../assets/movieCard.png'

const moviesURL = import.meta.env.VITE_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY
const baseUrlImage = 'https://image.tmdb.org/t/p/w500'

function MovieSection({ title }) {
  const [movies, setMovies] = useState([])

  const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
    console.log(data)
  }

  useEffect(() => {
    const moviesUrl = `${moviesURL}/movie/top_rated?${apiKey}`
    getMovies(moviesUrl)
  }, [])

  return (
    <section className="ml-16 mt-8">
      <div className="my-8">
        <span className="text-white text-4xl ">{title}</span>
      </div>
      <div className="flex gap-4 items-center h-[198px] overflow-x-scroll no-scrollbar">
        {movies &&
          movies.map((movie) => (
            <MovieCard image={`${baseUrlImage}/${movie.poster_path}`} />
          ))}
      </div>
    </section>
  )
}

export default MovieSection
