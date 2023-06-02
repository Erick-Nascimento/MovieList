import { api } from './axios'

export function fetchMovies(genre) {
  return api
    .get(`/discover/movie?with_genres=${genre}`)
    .then((response) => response.data.results)
}
