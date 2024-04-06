import { useEffect } from 'react'
import HeroImg from '../../assets/stranger.jpg'
import Herocontent from '../Hero/HeroContent/index'
import UseUpcomingMovies from '../../commons/hooks/useUpcomingMovies'

function Hero() {
  const { upcomingMovies, getUpcomingMovies } = UseUpcomingMovies()
  const baseUrlImage = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    getUpcomingMovies()
  }, [])

  return (
    <swiper-container
      slides-per-view="1"
      space-between="10"
      scrollbar="false"
      grab-cursor="true"
      mousewheel-invert="true"
      navigation="true"
      pagination="true"
      pagination-clickable="true"
      autoplay
    >
      {upcomingMovies.map((movie) => (
        <swiper-slide key={movie.id} className="aspect-video">
          <img
            src={`${baseUrlImage}/${movie.backdrop_path}`}
            alt=""
            className="mt-[-80px] w-full z-40 h-[600px] object-cover object-[0_30%]"
          />

          <Herocontent
            title={movie.title}
            overview={movie.overview}
            movieId={movie.id}
          />
        </swiper-slide>
      ))}
    </swiper-container>
  )
}

export default Hero
