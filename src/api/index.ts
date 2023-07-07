import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// Create an axios real column
const request = axios.create({
  // Get base url
  baseURL: import.meta.env.VITE_BASE_URL,
  // Set the timeout period
  timeout: 5000,
  // Set a timeout prompt
  timeoutErrorMessage: 'The request timed out, please try again later!',
  withCredentials: true
})

// Set request interceptor
request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config
})

// Set response interceptor
request.interceptors.response.use(
  (res: AxiosResponse) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default request
