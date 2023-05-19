import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favorites from '../pages/Favorites'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import Series from '../pages/Series'
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
