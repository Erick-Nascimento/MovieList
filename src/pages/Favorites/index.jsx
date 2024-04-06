import { useContext, useEffect, useState } from 'react'
import { FavoriteMovies } from '../../commons/context/favoriteMovies'
import useSpecificMovies from '../../commons/hooks/useSpecificMovies'
import { getaSpecificMovie } from '../../services/movies'
import { ModalContext } from '../../commons/context/openModal'
import MovieCard from '../../components/MovieSection/MovieCard'
import MovieSection from '../../components/MovieSection'

function Favorites() {
  const { favorites } = useContext(FavoriteMovies)
  const { movie, getSpecificMovie } = useSpecificMovies()
  const { isVisible, toggleVisibility, pickedMovie, setPickedMovie } =
    useContext(ModalContext)
  const baseUrlImage = 'https://image.tmdb.org/t/p/w500'

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await Promise.all(
        favorites.map(async (id) => {
          const movieData = await getaSpecificMovie(id)
          return movieData
        })
      )
      setMovieList(fetchedMovies.filter((movie) => movie !== null))
    }

    fetchMovies()
  }, [favorites])

  return (
    <>
      <div className="pt-14">
        <MovieSection
          title={'Filmes Favoritos'}
          listOfMovies={movieList}
          text={'Nenhum filme adicionado a favoritos'}
        />

        {/*{movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            image={`${baseUrlImage}/${movie.backdrop_path}`}
            movieId={movie.id}
            toggleFunction={toggleVisibility}
          />
        ))}*/}
      </div>
    </>
  )
}

export default Favorites
