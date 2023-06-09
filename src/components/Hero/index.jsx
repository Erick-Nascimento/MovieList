import HeroImg from '../../assets/stranger.jpg'
import Herocontent from '../Hero/HeroContent/index'

function Hero() {
  return (
    <div className="relative">
      <img
        src={HeroImg}
        alt=""
        className="mt-[-80px] w-full z-40 h-[600px] object-cover object-[0_70%]"
      />

      <Herocontent />
    </div>
  )
}

export default Hero
