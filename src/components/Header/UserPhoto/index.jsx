import User from '../../../../public/assets/User.jpeg'
import Arrow from '../../../../public/assets/Arrow.png'
import { useRef, useState } from 'react'
import DropdownMenu from '../../DropdownMenu'

function UserPhoto() {
  const [open, setOpen] = useState(false)
  const avatarRef = useRef(null)
  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      ref={avatarRef}
      onClick={() => setOpen(!open)}
    >
      <div className="relative">
        <img
          src={User}
          alt="User"
          className="rounded-full h-[45px] w-[45px] object-cover"
        />
        <div className="absolute top-14 left-0 right-0">
          {open && <DropdownMenu openerRef={avatarRef} setOpen={setOpen} />}
        </div>
      </div>
      <img src={Arrow} alt="Arrow" />
    </div>
  )
}

export default UserPhoto
