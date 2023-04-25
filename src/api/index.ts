import axios from 'axios'

const api = ({ url, options }: {url: string, options?: object}) => axios.create({
  baseURL: url,
  ...options
})

export default api
