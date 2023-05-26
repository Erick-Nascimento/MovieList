function MovieCard({ image }) {
  return (
    <div className="h-[183px] w-[131px] hover:h-[198px] hover:w-[151px] duration-300 shrink-0 cursor-pointer">
      <img
        src={image}
        alt=""
        className="h-[183px] w-[131px] hover:h-[198px] hover:w-[151px] duration-300 object-cover"
      />
    </div>
  )
}

export default MovieCard
