import Hero from '../../components/Hero'
import Modal from '../../components/Modal'
import MovieSection from '../../components/MovieSection'
import { ModalContext } from '../../commons/context/openModal'
import { useContext, useEffect, useState } from 'react'
import useMovies from '../../commons/hooks/useMovies'
import { fetchMovies } from '../../services/movies'

function Home() {
  const genres = [16, 27, 9648]
  const [moviesList, setMovieList] = useState({})
  const { listMovies, getMovies } = useMovies()

  useEffect(() => {
    const fetch2Movies = async () => {
      const fetchedMovies = await Promise.all(
        genres.map(async (genre) => {
          const movieData = await fetchMovies(genre)
          return movieData
        })
      )
      setMovieList(fetchedMovies.filter((movie) => movie !== null))
    }

    fetch2Movies()
  }, [])

  return (
    <>
      <Hero />

      {/*
      {genres?.map((section) => (
        <MovieSection title={'Animações'} genre={section} key={section} />
      ))}
      */}

      <MovieSection title={'Animações'} listOfMovies={moviesList[0]} />
      <MovieSection title={'Terror'} listOfMovies={moviesList[1]} />
      <MovieSection title={'Mistério'} listOfMovies={moviesList[2]} />

      <div className="mb-16"></div>
    </>
  )
}

export default Home
