import { createContext, useState } from 'react'

export const FavoriteMovies = createContext({
  favorites: [],
  addFavorite: () => {},
})

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const addFavorite = (movieId) => {
    const updatedMovies = [...favorites, movieId]
    setFavorites(updatedMovies)
  }

  return (
    <FavoriteMovies.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoriteMovies.Provider>
  )
}

export default FavoritesContextProvider
