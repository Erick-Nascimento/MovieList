import MovieCard from './MovieCard'

function MovieSection({ title }) {
  return (
    <section className="ml-16 mt-8">
      <div className="my-8">
        <span className="text-white text-4xl ">{title}</span>
      </div>
      <div className="flex gap-4 items-center h-[151px] ">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  )
}

export default MovieSection
