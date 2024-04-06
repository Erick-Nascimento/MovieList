import { useRef } from 'react'
import { useClickOutsideListener } from '../../commons/hooks/useClickOutsideListener'
import LogoutIcon from '../../../public/assets/logout.png'
import ConfigIcon from '../../../public/assets/config.png'
import ProfileIcon from '../../../public/assets/user.png'
import DropdownMenuItem from './DropdownMenuItem/DropdownMenuItem'

function DropdownMenu({ openerRef, setOpen }) {
  const dropdownRef = useRef(null)
  useClickOutsideListener(dropdownRef, openerRef, setOpen)
  return (
    <div ref={dropdownRef} className="flex flex-col items-center ">
      <div className="w-16 overflow-hidden flex justify-center mr-2">
        <div className=" h-4 w-4 bg-red bg-opacity-50 rotate-45 transform origin-bottom-left text-center"></div>
      </div>
      <div className="bg-red bg-opacity-50 w-32">
        <DropdownMenuItem text={'Perfil'} icon={LogoutIcon} link={'#'} />
        <DropdownMenuItem text={'Config'} icon={ConfigIcon} link={'#'} />
        <DropdownMenuItem text={'Sair'} icon={ProfileIcon} link={'#'} />
        {/*
        <div className="flex items-center justify-between">
          <p className="bg-cyan-500">Perfil</p>
          <CgProfile />
        </div>
        <div className="flex items-center justify-between">
          <p className="bg-cyan-500">Configs</p>
          <GrConfigure />
        </div>
        <div className="flex items-center justify-between">
          <p className="bg-cyan-500">Sair</p>
          <IoLogOutOutline />
        </div>
        */}
      </div>
    </div>
  )
}

export default DropdownMenu
