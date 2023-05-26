import movieImage from '../../../assets/movieCard.png'

function MovieCard() {
  return (
    <div className="h-[183px] w-[131px] hover:h-[198px] hover:w-[151px] duration-300">
      <img
        src={movieImage}
        alt=""
        className="h-[183px] w-[150px] hover:h-[198px] hover:w-[151px] object-contain duration-300"
      />
    </div>
  )
}

export default MovieCard
