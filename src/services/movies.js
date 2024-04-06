import { api } from './axios'

export async function fetchMovies(genre) {
  return api
    .get(`/discover/movie?with_genres=${genre}`)
    .then((response) => response.data.results)
}

export async function getaSpecificMovie(movieId) {
  return api
    .get(`/movie/${movieId}?language=pt-BR`)
    .then((response) => response.data)
}

export async function getTheRelatedMovies(movieId) {
  return api.get(`/movie/${movieId}/similar`).then((response) => response.data)
}

export async function getTheUpcomingMovies() {
  return api
    .get(`/movie/upcoming?language=pt-BR`)
    .then((response) => response.data)
}

export async function getActors(movieId) {
  return api.get(`/movie/${movieId}/casts`).then((response) => response.data)
}

export async function getTrailer(movieId) {
  return api.get(`/movie/${movieId}/videos`).then((response) => response.data)
}
