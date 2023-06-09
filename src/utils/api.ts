import axios from 'axios'


const api = axios.create({
  baseURL: `${process.env.URL || 'http://localhost:3001'}`,
  validateStatus: (status) => {
    return status >= 200 && status <= 500
  },
  headers: {
    'Content-Type': 'application/json',
      accept: '*/*',
      
  },
})

export { api }