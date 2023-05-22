import React from 'react'
import Nav from './Nav'
import Logo from '../../assets/popcorn-logo.png'
import Bell from '../../assets/bell.png'
import SearchIcon from '../../assets/Search.png'
import UserPhoto from './UserPhoto'

function Header() {
  return (
    <header className="bg-black text-white bg-opacity-50 border-white border-b font-Inter border-opacity-50 h-[80px] flex px-12 items-center justify-between z-50 relative">
      <div className="flex gap-32 items-center">
        <img src={Logo} alt="logo" />
        <Nav />
      </div>
      <div className="flex items-center gap-8">
        <img src={SearchIcon} alt="logo" className="h-[16px] w-[16px]" />
        <img src={Bell} alt="logo" className="h-[16px] w-[16px]" />
        <UserPhoto />
      </div>
    </header>
  )
}

export default Header
