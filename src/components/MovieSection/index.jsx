import { useContext, useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import useMovies from '../../commons/hooks/useMovies'
import Modal from '../Modal'
import { ModalContext } from '../../commons/context/openModal'
import useRelatedMovies from '../../commons/hooks/useRelatedMovies'
import EmptyList from '../EmptyList/EmptyList'

const baseUrlImage = 'https://image.tmdb.org/t/p/w500'

function MovieSection({ title, genre, listOfMovies, text }) {
  const { listMovies, getMovies } = useMovies()
  const { isVisible, toggleVisibility, pickedMovie, setPickedMovie } =
    useContext(ModalContext)

  useEffect(() => {
    genre && getMovies(genre)
  }, [])

  return (
    <section className="ml-24 mt-8">
      <div className="my-8">
        {listOfMovies?.length === 0 ? (
          <EmptyList text={text} />
        ) : (
          <span className="text-white text-4xl">{title}</span>
        )}
      </div>

      {/*scrollbar-clickable="true"*/}
      <swiper-container
        slides-per-view="10"
        space-between="10"
        scrollbar="false"
        grab-cursor="true"
        mousewheel-invert="true"
        navigation="true"
        pagination="false"
        className="flex items-center h-[198px] overflow-x-scroll no-scrollbar"
      >
        {listOfMovies &&
          listOfMovies?.map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              image={`${baseUrlImage}/${movie.poster_path}`}
              toggleFunction={toggleVisibility}
            />
          ))}
        {genre &&
          listMovies?.map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              image={`${baseUrlImage}/${movie.poster_path}`}
              toggleFunction={toggleVisibility}
            />
          ))}
      </swiper-container>
      {isVisible && (
        <Modal
          toggleFunction={toggleVisibility}
          movieId={pickedMovie}
          genre={genre}
        />
      )}
    </section>
  )
}

export default MovieSection
