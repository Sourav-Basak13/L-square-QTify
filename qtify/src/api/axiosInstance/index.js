import axios from "axios";
import { baseUrl } from "../endpoints";
import { globalCatchError } from "../../lib/functions/_helpers.lib";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use((config) => {
  // config.headers.Authorization;
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    globalCatchError(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
