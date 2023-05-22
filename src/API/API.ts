import axios, { AxiosHeaders } from "axios"
import { store } from "../Redux/Store";


const state = store.getState()


export const api = axios.create({
  baseURL: "http://localhost:5097/api",
  
  headers:{
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    'Accept': '*/*',
    'Content-Type': 'application/json',
    Authorization : `Bearer ${state.user.Token}`,
  }
})

// defining a custom error handler for all APIs
const errorHandler = (error: any) => {
  const statusCode = error.response?.status

  // logging only errors that are not 401
  if (statusCode && statusCode !== 401) {
    console.error(error)
  }

  return Promise.reject(error)
}

// registering the custom error handler to the
// "api" axios instance
api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error)
})