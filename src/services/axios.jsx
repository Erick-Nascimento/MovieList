import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL
const TOKEN = import.meta.env.VITE_TOKEN

export const api = axios.create({
  baseURL: BASE_URL,
})

api.defaults.headers.common['Authorization'] = TOKEN
