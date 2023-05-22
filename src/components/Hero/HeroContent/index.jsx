import IconButton from '../../IconButton'

import infoIcon from '../../../assets/infoIcon.png'
import playIcon from '../../../assets/playIcon.png'

function HeroContent() {
  return (
    <div className="absolute top-[50%] ml-16">
      <div className="flex flex-col text-white">
        <span className="text-4xl">Stranger Things</span>
        <span className="py-8 w-1/2 text-lg">
          Um grupinho de amigos sem noção e sem pais sai fazendo merda pela
          cidade e encontram uma garota maluca e careca que fugiu de uma clínica
          psiquiatra.
        </span>
      </div>
      <div className="flex gap-6">
        <IconButton icon={playIcon} text={'Assistir'} color={'#E00E0E'} />
        <IconButton
          icon={infoIcon}
          text={'Mais Informações'}
          color={'#161616'}
        />
      </div>
    </div>
  )
}

export default HeroContent
