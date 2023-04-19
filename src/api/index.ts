import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL || 'https://rickandmortyapi.com/api'
})

export default api
