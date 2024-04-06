import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favorites from '../pages/Favorites'
import Home from '../pages/Home'
import VerDepois from '../pages/VerDepois'
import StandardPage from '../pages/standardPage'
import ModalContextProvider from '../commons/context/openModal'
import FavoritesContextProvider from '../commons/context/favoriteMovies'
import Movie from '../pages/Movie'
import SeeLaterListProvider from '../commons/context/seeLater'

function MyRoutes() {
  return (
    <ModalContextProvider>
      <FavoritesContextProvider>
        <SeeLaterListProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<StandardPage />}>
                <Route index element={<Home />} />
                <Route path="verdepois" element={<VerDepois />} />
                <Route path="favorites" element={<Favorites />} />
              </Route>
              <Route path="/movie" element={<Movie />}></Route>
            </Routes>
          </BrowserRouter>
        </SeeLaterListProvider>
      </FavoritesContextProvider>
    </ModalContextProvider>
  )
}

export default MyRoutes
