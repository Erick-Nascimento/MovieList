import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function StandardPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default StandardPage
