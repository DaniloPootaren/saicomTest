import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const watchHttpResponses = () => {
  axios.interceptors.response.use(
    (res: AxiosResponse) => {
      if (res.status > 200) {
        toast("Successful", { type: "success", theme: "light" });
      }
      return res;
    },
    (err) => {
      err.response.data.message.forEach((msg: string) => {
        toast(msg, { type: "error", theme: "light" });
      });
      return Promise.reject(err);
    }
  );
};
