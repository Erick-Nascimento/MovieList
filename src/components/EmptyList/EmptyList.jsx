import PopcornImg from '../../../public/assets/empty.png'

function EmptyList({ text }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={PopcornImg} alt={'Popcorn'} />
      <span className="text-white text-xl">{text}</span>
    </div>
  )
}

export default EmptyList
