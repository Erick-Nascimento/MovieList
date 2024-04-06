import IconButton from '../../IconButton'

import infoIcon from '../../../../public/assets/infoIcon.png'
import playIcon from '../../../../public/assets/playIcon.png'
import { Link } from 'react-router-dom'
import useTrailer from '../../../commons/hooks/useTrailer'
import { useContext, useEffect } from 'react'
import { ModalContext } from '../../../commons/context/openModal'

function HeroContent({ title, overview, movieId }) {
  const { trailer, getTrailers } = useTrailer()
  const { isVisible, toggleVisibility, pickedMovie, setPickedMovie } =
    useContext(ModalContext)

  useEffect(() => {
    getTrailers(movieId)
  }, [])

  return (
    <div className="fixed w-full top-[40%] ml-24">
      <div className="flex flex-col text-white w-full">
        <span className="text-4xl w-max">{title}</span>
        <span className="line-clamp-3 h-[83px] my-8 w-1/2 text-lg">
          {overview}
        </span>
      </div>
      <div className="flex gap-6 mt-4">
        <Link to="/movie" state={{ trailer }}>
          <IconButton icon={playIcon} text={'Assistir'} color={'red'} />
        </Link>
        <IconButton
          icon={infoIcon}
          text={'Mais Informações'}
          color={'black'}
          execFunc={() => {
            setPickedMovie(movieId)
            toggleVisibility()
          }}
        />
      </div>
    </div>
  )
}

export default HeroContent
