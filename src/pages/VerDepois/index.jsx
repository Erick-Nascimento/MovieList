import { useContext, useEffect, useState } from 'react'
import { SeeLaterList } from '../../commons/context/seeLater'
import { getaSpecificMovie } from '../../services/movies'
import MovieSection from '../../components/MovieSection'
import { ModalContext } from '../../commons/context/openModal'

function VerDepois() {
  const { seeLaterList } = useContext(SeeLaterList)
  const [movieToSeeLaterList, setMovieToSeeLaterList] = useState([])
  const { isVisible, toggleVisibility, pickedMovie, setPickedMovie } =
    useContext(ModalContext)

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await Promise.all(
        seeLaterList.map(async (id) => {
          const movieData = await getaSpecificMovie(id)
          return movieData
        })
      )
      setMovieToSeeLaterList(fetchedMovies.filter((movie) => movie !== null))
    }

    fetchMovies()
  }, [])

  return (
    <>
      <div className="pt-14">
        <MovieSection
          title={'Ver Depois'}
          listOfMovies={movieToSeeLaterList}
          text={'Nenhum filme na lista de espera'}
        />
      </div>
    </>
  )
}

export default VerDepois
