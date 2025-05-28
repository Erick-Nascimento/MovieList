import React from 'react'
import Nav from './Nav'
import Logo from '../../assets/popcornLogo.png'
import Bell from '../../assets/bell.png'
import SearchIcon from '../../assets/search.png'
import UserPhoto from './UserPhoto'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-black text-white bg-opacity-50 border-white border-b font-Inter border-opacity-50 h-14 flex px-12 items-center justify-between z-30 absolute w-full top-0 left-0">
      <div className="flex gap-32 items-center">
        <Link to="/">
          <img src={Logo} alt="logo" className="cursor-pointer" />
        </Link>
        <Nav />
      </div>
      <div className="flex items-center gap-8">
        <img
          src={SearchIcon}
          alt="logo"
          className="h-[18px] w-[18px] cursor-pointer"
        />
        <img
          src={Bell}
          alt="logo"
          className="h-[16px] w-[16px] cursor-pointer"
        />
        <UserPhoto />
      </div>
    </header>
  )
}

export default Header
