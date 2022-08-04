import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const apiService = {
  get<ResponseType, RequestType = never>(
    url: string,
    config: AxiosRequestConfig = {}
  ) {
    return axiosInstance.get<ResponseType, RequestType>(url, config)
  },

  post<ResponseType, RequestType = never>(
    url: string,
    data: RequestType,
    config: AxiosRequestConfig = {}
  ) {
    return axiosInstance.post<ResponseType, RequestType>(url, data, config)
  },

  put<ResponseType, RequestType = never>(
    url: string,
    data: RequestType,
    config: AxiosRequestConfig = {}
  ) {
    return axiosInstance.put<ResponseType, RequestType>(url, data, config)
  },

  delete<ResponseType, RequestType = never>(
    url: string,
    config: AxiosRequestConfig = {}
  ) {
    return axiosInstance.delete<ResponseType, RequestType>(url, config)
  },

  patch<ResponseType, RequestType = never>(
    url: string,
    data: RequestType,
    config: AxiosRequestConfig = {}
  ) {
    return axiosInstance.patch<ResponseType, RequestType>(url, data, config)
  },
}

export default apiService
