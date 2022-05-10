import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const watchHttpResponses = () => {
  axios.interceptors.response.use(
    (res: AxiosResponse) => {
      if (res.status > 200) {
        toast("Address created", {
          type: "success",
          theme: "light",
          autoClose: 1000,
        });
      }
      return res;
    },
    (err) => {
      err.response.data.message.forEach((msg: string) => {
        toast(msg, { type: "error", theme: "light", autoClose: 1000 });
      });
      return Promise.reject(err);
    }
  );
};
