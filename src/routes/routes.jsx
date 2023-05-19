import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/header'
import Favorites from '../pages/favorites'
import Home from '../pages/home'
import Movies from '../pages/movies'
import Series from '../pages/series'
import axios from 'axios'
import StandardPage from '../pages/standardPage'

function MyRoutes() {
  

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StandardPage />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
