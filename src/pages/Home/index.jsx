import Hero from '../../components/Hero'
import MovieSection from '../../components/MovieSection'

function Home() {
  return (
    <>
      <Hero />
      <MovieSection title={'Ação e Aventura'} genre={28} />
      <MovieSection title={'Comédia'} genre={35} />
    </>
  )
}

export default Home
