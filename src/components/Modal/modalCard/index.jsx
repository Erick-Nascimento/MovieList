import PlusIcon from '../../../../public/assets/plusIcon.png'

function ModalCard({ image, releaseDate }) {
  const baseUrlImage = 'https://image.tmdb.org/t/p/w500'
  return (
    <>
      <div
        className="w-[33%] bg-[#404040] rounded cursor-pointer"
        onClick={() => console.log('clicou')}
      >
        <div className="">
          <img
            className="w-full h-28 rounded-t"
            src={`${baseUrlImage}/${image}`}
          />
        </div>
        <div className="p-2">
          <div className="flex justify-between my-2">
            <div className="flex gap-4">
              <span className="bg-[#FCF43E] rounded font-semibold w-[25px] flex justify-center">
                18
              </span>
              <span className="text-sm">{releaseDate.split('-')[0]}</span>
            </div>
            <span>
              <img src={PlusIcon} className="cursor-pointer" />
            </span>
          </div>
          {/*
          <div className="h-[92px] overflow-hidden">
            <span className="text-sm">
              Esse é um filme assim e assim assim onde o personagem faz isso e
              isso mais Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Corrupti, officia ullam distinctio consequatur libero
              maiores omnis recusandae, id necessitatibus quo inventore
              corporis! Aliquam pariatur vel eum adipisci dolores, facilis
              voluptas.
            </span>
          </div>
          */}
        </div>
      </div>
    </>
  )
}

export default ModalCard
