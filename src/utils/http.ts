import axios, { AxiosResponse } from "axios";

export const watchHttpResponses = () => {
  axios.interceptors.response.use(
    (res: AxiosResponse) => {
      if (res.status === 201) {
        console.log("Posted Successfully");
      }
      if (res.status === 500) {
        console.log("Contact Administrator");
      }

      if (res.status === 404) {
        console.log("Contact Administrator");
      }

      if (res.status === 401) {
        console.log("UnAuthorized");
      }
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
};
