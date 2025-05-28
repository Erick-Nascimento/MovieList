import { useEffect, useContext, useState } from 'react'
import IconButton from '../IconButton'
import ModalCard from './modalCard'
import PlayIcon from '../../assets/playIcon.png'
import HearthIcon from '../../assets/hearthIcon.png'
import FilledHearthIcon from '../../assets/filledHearthIcon.png'
import PlusIcon from '../../assets/plusIcon.png'
import RemoveIcon from '../../assets/removeIcon.png'
import useSpecificMovies from '../../commons/hooks/useSpecificMovies'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Banner from '../../assets/banner.jpg'
import useRelatedMovies from '../../commons/hooks/useRelatedMovies'
import useCast from '../../commons/hooks/useCast'
import { FavoriteMovies } from '../../commons/context/favoriteMovies'
import useTrailer from '../../commons/hooks/useTrailer'
import { Link } from 'react-router-dom'
import { SeeLaterList } from '../../commons/context/seeLater'

function Modal({ toggleFunction, movieId }) {
  const { movie, getSpecificMovie, loading, setLoading } = useSpecificMovies()
  const { relatedMovies, getRelatedMovies } = useRelatedMovies()
  const { cast, getCast } = useCast()
  const baseUrlImage = 'https://image.tmdb.org/t/p/original'
  const [like, setLike] = useState(false)
  const [added, setAdded] = useState(false)
  const { favorites, addFavorite } = useContext(FavoriteMovies)
  const { trailer, getTrailers } = useTrailer()
  const { seeLaterList, addToLaterList } = useContext(SeeLaterList)

  const toggleHeart = (movieId) => {
    if (like === false) {
      setLike(true)
      if (!favorites.includes(movieId)) {
        addFavorite(movieId)
      }
    } else if (like === true) {
      setLike(false)
      const index = favorites.indexOf(movieId)
      favorites.splice(index, 1)
    }
  }

  const toggleAdded = (movieId) => {
    if (added === false) {
      setAdded(true)
      if (!seeLaterList.includes(movieId)) {
        addToLaterList(movieId)
      }
    } else if (added === true) {
      setAdded(false)
      const index = seeLaterList.indexOf(movieId)
      seeLaterList.splice(index, 1)
    }
  }

  useEffect(() => {
    getSpecificMovie(movieId)
    getRelatedMovies(movieId)
    getCast(movieId)
    getTrailers(movieId)
    if (favorites.includes(movieId)) {
      setLike(true)
    }
    if (seeLaterList.includes(movieId)) {
      setAdded(true)
    }
  }, [])

  const movieCast = cast
    ?.slice(0, 3)
    ?.map((actor) => actor.name)
    ?.join(', ')

  const movieGenres = movie.genres?.map((genre) => genre.name)?.join(', ')

  const filteredMovies = relatedMovies.filter(
    (filme) => filme.backdrop_path !== null
  )

  return (
    <div
      className={`flex absolute top-0 left-0 h-screen w-full items-center justify-center`}
    >
      <div
        className="fixed z-50 top-0 left-0 h-[100vh] w-[100vw] bg-[#00000060] flex items-center justify-center"
        onClick={toggleFunction}
      ></div>
      <div className="bg-[#161616] rounded-md z-50 text-white max-w-2xl max-h-[90vh] fixed overflow-hidden">
        <div className="relative w-full max-h-64">
          {loading ? (
            <Skeleton
              height="100%"
              width="100%"
              containerClassName="w-full h-80 max-h-64"
            />
          ) : (
            <img
              className="w-full h-80 max-h-64 object-cover"
              src={`${baseUrlImage}/${movie.backdrop_path}`}
              onLoad={() => setLoading(false)}
            />
          )}

          <div className="h-[150px] w-full absolute bottom-0 bg-gradient-to-t from-[#161616]"></div>
        </div>
        <div className="flex flex-col px-11 pb-11 pt-4">
          <div className="flex gap-4">
            <div className="flex flex-col w-[55%]">
              <div className="flex items-center gap-4">
                <span className="my-4 font-semibold text-xl">
                  {loading ? <Skeleton /> : movie.title}
                </span>
                <span className="font-semibold">
                  {movie.release_date?.split('-')[0]}
                </span>
              </div>
              <div className="mb-8 max-h-24 text-justify overflow-hidden flex">
                <span className="line-clamp-3">
                  {loading ? <Skeleton count={3} /> : movie.overview}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <Link to="/movie" state={{ trailer }}>
                  <IconButton
                    text={'Assistir'}
                    color={'red'}
                    icon={PlayIcon}
                    execFunc={() => console.log('')}
                  />
                </Link>
                <span>
                  {like ? (
                    <img
                      src={FilledHearthIcon}
                      className="cursor-pointer w-7 h-7"
                      onClick={() => toggleHeart(movieId)}
                    />
                  ) : (
                    <img
                      src={HearthIcon}
                      className="cursor-pointer w-7 h-7"
                      onClick={() => toggleHeart(movieId)}
                    />
                  )}
                </span>
                <span>
                  {!added ? (
                    <img
                      src={PlusIcon}
                      className="cursor-pointer w-7 h-7"
                      onClick={() => toggleAdded(movieId)}
                    />
                  ) : (
                    <img
                      src={RemoveIcon}
                      className="cursor-pointer w-8 h-8"
                      onClick={() => toggleAdded(movieId)}
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="flex flex-col w-[45%]">
              <span className="bg-red rounded font-semibold w-[25px] flex justify-center my-4">
                18
              </span>
              <p className="text-sm text-white">
                Elenco: <span className="text-gray">{movieCast}</span>
              </p>
              <p className="text-sm text-white">
                Gêneros: <span className="text-gray">{movieGenres}</span>
              </p>
              <p className="text-sm text-white">
                Tempo de duração:{' '}
                <span className="text-gray">{movie.runtime} min</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="my-4 font-semibold text-xl">
              Títulos de mesmo gênero
            </span>
            <div className="flex gap-4">
              {filteredMovies.slice(0, 3).map((m) => (
                <ModalCard
                  key={m.id}
                  image={m.backdrop_path}
                  releaseDate={m.release_date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
