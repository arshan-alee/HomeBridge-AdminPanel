import axios from "axios";
import baseUrl from "../utils/baseUrl";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const user = JSON.parse(localStorage.getItem("info"));

    if (user) {
      config.headers["Authorization"] = user?.token;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  function (config) {
    return config;
  }
  // function (err) {
  //   if (err.response.status === 401) {
  //     window.location.href = "/";
  //     return Promise.reject(err);
  //   }
  // }
);

export default axiosInstance;
