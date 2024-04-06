import { useContext, useEffect, useState } from 'react'
import useSpecificMovies from '../../../commons/hooks/useSpecificMovies'
import Modal from '../../Modal'
import useRelatedMovies from '../../../commons/hooks/useRelatedMovies'
import { ModalContext } from '../../../commons/context/openModal'

function MovieCard({ image, movieId, toggleFunction }) {
  const { pickedMovie, setPickedMovie } = useContext(ModalContext)
  const baseUrlImage = 'https://image.tmdb.org/t/p/original'

  return (
    <>
      <swiper-slide
        className="h-[183px] w-[131px] {/*hover:h-[198px] hover:w-[151px]*/} duration-300 shrink-0 rounded-sm"
        onClick={() => {
          toggleFunction()
          setPickedMovie(movieId)
        }}
      >
        <img
          src={`${baseUrlImage}/${image}`}
          alt=""
          className="h-[183px] w-full {/*hover:h-[198px] hover:w-[151px]*/} duration-300 object-cover cursor-pointer rounded-sm"
        />
      </swiper-slide>
    </>
  )
}

export default MovieCard
