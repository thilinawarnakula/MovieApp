import axios from 'axios';

const API_KEY = 'AIzaSyB5mUJfy20sj5ozvg_38GxSk_TI2dts_go';

export default class Api {

  axiosApi;

  constructor(baseUrl) {
    this.axiosApi = axios.create({
      baseURL: baseUrl,
      params: {
        part : 'snippet',
        key : API_KEY
      },
    });

    this.axiosApi.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        return Promise.reject(error);
      },
    );
  }


  set baseUrl(baseUrl) {
    this.axiosApi.defaults.baseURL = baseUrl;
  }

  get axios() {
    return this.axiosApi;
  }
}
