import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mock-api.local'
})

export default api
