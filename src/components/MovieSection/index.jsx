import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import useMovies from '../../commons/hooks/useMovies'

const baseUrlImage = 'https://image.tmdb.org/t/p/w500'

function MovieSection({ title, genre }) {
  const { listMovies, getMovies } = useMovies()

  useEffect(() => {
    getMovies(genre)
  }, [])

  return (
    <section className="ml-16 mt-8">
      <div className="my-8">
        <span className="text-white text-4xl ">{title}</span>
      </div>
      <div className="flex gap-4 items-center h-[198px] overflow-x-scroll no-scrollbar">
        {/*TO-DO*/}
        {listMovies &&
          listMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              image={`${baseUrlImage}/${movie.poster_path}`}
            />
          ))}
      </div>
    </section>
  )
}

export default MovieSection
