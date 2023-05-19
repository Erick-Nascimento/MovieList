import { Outlet } from 'react-router-dom'
import Header from '../components/header'

function StandardPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default StandardPage
