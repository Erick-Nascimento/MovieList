import React from 'react'
import Nav from './Nav/'
import Logo from '../../assets/popcorn-logo.png'

function Header() {
  return (
    <header className="bg-black text-white opacity-50">
      <img src={Logo} alt="logo" />
      <Nav />
    </header>
  )
}

export default Header
